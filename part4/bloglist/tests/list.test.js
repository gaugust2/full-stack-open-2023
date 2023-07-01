const listHelper = require('../utils/list_helper')
const {listWithNoBlog, listWithOneBlog, listWithMultipleBlogs} = require('./blogs_helper')

test('dummy returns one', () => {
    const result = listHelper.dummy(listWithNoBlog)
    expect(result).toBe(1)
})

describe('total likes', () => {
    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })

    test('when list has multiple blogs, equals the sum of all', () => {
        const result = listHelper.totalLikes(listWithMultipleBlogs)
        expect(result).toBe(36)
    })

    test('when list has no blogs, return 0', () => {
        const result = listHelper.totalLikes(listWithNoBlog)
        expect(result).toBe(0)
    })
})

describe('favourite blog', () => {
    test('when list has only one blog, return that blog', () => {
        const result = listHelper.favouriteBlog(listWithOneBlog)
        expect(result).toEqual({
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        })
    })

    test('when list has multiple blogs, return the blog with the highest likes', () => {
        const result = listHelper.favouriteBlog(listWithMultipleBlogs)
        expect(result).toEqual({
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
        })
    })

    test('when list has no blogs, return null', () => {
        const result = listHelper.favouriteBlog(listWithNoBlog)
        expect(result).toBe(null)
    })
})

describe('most blogs', () => {
    test("when list has only one blog, return that blog's author and number of blogs", () => {
        const result = listHelper.mostBlogs(listWithOneBlog)
        expect(result).toEqual({
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })

    test('when list has multiple blogs, return the blog with the highest likes', () => {
        const result = listHelper.mostBlogs(listWithMultipleBlogs)
        expect(result).toEqual({
            author: "Robert C. Martin",
            blogs: 3
        })
    })

    test('when list has no blogs, return null', () => {
        const result = listHelper.mostBlogs(listWithNoBlog)
        expect(result).toBe(null)
    })
})


describe('most likes', () => {
    test("when list has only one blog, return that blog's author and likes", () => {
        const result = listHelper.mostLikes(listWithOneBlog)
        expect(result).toEqual({
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })

    test('when list has multiple blogs, return the blog with the highest likes', () => {
        const result = listHelper.mostLikes(listWithMultipleBlogs)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            likes: 12
        })
    })

    test('when list has no blogs, return null', () => {
        const result = listHelper.mostLikes(listWithNoBlog)
        expect(result).toBe(null)
    })
})