const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    return blogs.length === 0 
    ? 0
    : blogs.reduce(reducer, 0)
}

const favouriteBlog = (blogs) => {
    const reducer = (max, item) => {
        return max.likes > item.likes
        ? max
        : item
    }

    return blogs.length === 0 
    ? null
    : blogs.reduce(reducer, 0)
}

const mostBlogs = (blogs) => {
    if(blogs.length === 0) return null

    let counter = 0
    const reducer = (max, next, i, array) => {
        if(array.filter(item => item.author === max.author).length >= array.filter(item => item.author === next.author).length ){
            counter++
            return max
        } else {
            counter = 1
            return next
        }
    }   

    const highestBlogged = blogs.reduce(reducer, 0)

    const returnBlog = {
        author: highestBlogged.author,
        blogs: counter
    }

    return returnBlog
}

const mostLikes = (blogs) => {
    if(blogs.length === 0) return null

    const reducer = (max, item) => {
        return max.likes > item.likes
        ? max
        : item
    }

    const highestLiked = blogs.reduce(reducer, 0)

    const returnBlog = {
        author: highestLiked.author,
        likes: highestLiked.likes
    }

    return returnBlog
}
  
  module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
  }