const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

afterAll(async () => {
    await mongoose.connection.close()
})

test('unique identifier property is "id" instead of "_id"', async () => {
    const response = await api.get('/api/blogs');

    const ids = response.body.map((blog) => blog.id);

    ids.forEach((id) => expect(id).toBeDefined)
});

test('a valid blog can be added', async () => {
    const response1 = await api.get('/api/blogs')
    const initialLength = response1.body.length

    const blog = {
        title:'title_test',
        author:'test test2',
        url:'test.com',
        likes: 3,
    }

    await api
    .post('/api/blogs')
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const response2 = await api.get('/api/blogs')
    const authors = response2.body.map(r => r.author)

    expect(response2.body).toHaveLength(initialLength + 1)
    expect(authors).toContain(
        'test test2'
      )
})

test('check if "likes" property defaults to 0', async () => {
    const blog = {
        title:'title_test2',
        author:'test test2 test3',
        url:'test.com',
    }

    await api
    .post('/api/blogs')
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const lastIndex = response.body.length - 1

    expect(response.body[lastIndex].likes).toBe(0)
})

test('check if "400 Bad Request" is sent back', async () => {
    const blog = {
        author:'test4',
        likes: 3,
    }

    await api
    .post('/api/blogs')
    .send(blog)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})
