const dummy = (blogs) => 1

const totalLikes = (blogs) => blogs.reduce((value, blog) => blog.likes + value, 0)

const favoriteBlog = (blogs) => (!blogs.length
  ? []
  : blogs.reduce((value, blog) => (
    value.likes < blog.likes
      ? blog
      : value)))

const mostBlogs = (blogs) => {
  let authors = []
  let numberOfBlog = []
  blogs.forEach((blog) => {
    if (authors.includes(blog.author)) {
      numberOfBlog[authors.indexOf(blog.author)] += 1
    } else {
      authors = authors.concat(blog.author)
      numberOfBlog = numberOfBlog.concat(1)
    }
  })
  const authorIndex = numberOfBlog.findIndex((number) => number === Math.max(...numberOfBlog))
  return {
    author: authors[authorIndex],
    blogs: numberOfBlog[authorIndex],
  }
}

const mostLikes = (blogs) => {
  let authors = []
  let numberOfLikes = []
  blogs.forEach((blog) => {
    if (authors.includes(blog.author)) {
      numberOfLikes[authors.indexOf(blog.author)] += blog.likes
    } else {
      authors = authors.concat(blog.author)
      numberOfLikes = numberOfLikes.concat(blog.likes)
    }
  })
  const authorIndex = numberOfLikes.findIndex((number) => number === Math.max(...numberOfLikes))
  return {
    author: authors[authorIndex],
    likes: numberOfLikes[authorIndex],
  }
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
