const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = []

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('1 blog post equal its like', () => {
    const blogs = [{
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }]

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(10)
  })

  test('also work with bigger list', () => {
    const blogs = [{
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }, {
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }, {
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }]

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(30)
  })
})

describe('Favorite blog', () => {
  test('empty list', () => {
    const blogs = []
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual([])
  })

  test('1 blog', () => {
    const blogs = [{
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }]
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: 'Testinga',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    })
  })

  test('multi blogs', () => {
    const blogs = [{
      title: 'Testinga1',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }, {
      title: 'Testinga2',
      author: 'noOneB',
      url: 'http://hosta.com',
      likes: 12,
    }, {
      title: 'Testinga3',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 15,
    }, {
      title: 'Testinga3',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 5,
    }]
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: 'Testinga3',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 15,
    })
  })
})

describe('Author with most blog', () => {
  test('let see', () => {
    const blogs = [{
      title: 'Testinga1',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }, {
      title: 'Testinga2',
      author: 'noOneB',
      url: 'http://hosta.com',
      likes: 12,
    }, {
      title: 'Testinga3',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 15,
    }, {
      title: 'Testinga4',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 5,
    },
    {
      title: 'Testinga1',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 10,
    }, {
      title: 'Testinga2',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 12,
    }, {
      title: 'Testinga3',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 15,
    }, {
      title: 'Testinga4',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 5,
    }]
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({
      author: 'noOneA',
      blogs: 4,
    })
  })
})
describe('Author with most like', () => {
  test('So much like', () => {
    const blogs = [{
      title: 'Testinga1',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 2,
    }, {
      title: 'Testinga2',
      author: 'noOneB',
      url: 'http://hosta.com',
      likes: 1,
    }, {
      title: 'Testinga3',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 4,
    }, {
      title: 'Testinga4',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 5,
    },
    {
      title: 'Testinga1',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 2,
    }, {
      title: 'Testinga2',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 4,
    }, {
      title: 'Testinga3',
      author: 'noOneA',
      url: 'http://hosta.com',
      likes: 5,
    }, {
      title: 'Testinga4',
      author: 'noOneC',
      url: 'http://hosta.com',
      likes: 1,
    }]
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual({
      author: 'noOneA',
      likes: 13,
    })
  })
})
