import { IBlogDto } from './blog-post-dto.interface'
import { BlogPost } from './blog-post.class'
let Parser = require('rss-parser')
let parser = new Parser()

export class BlogPostService {
  static BlogPostFromDto = (dto: IBlogDto | undefined) => {
    return new BlogPost(
      dto?.author,
      dto?.categories,
      dto?.content,
      dto?.description,
      dto?.enclosure,
      dto?.guid,
      dto?.link,
      dto?.pubDate,
      dto?.thumbnail,
      dto?.title,
    )
  }

  static getMediumBlogs = async () => {
    const url = 'https://blankenstein.dev/https://brandonblankenstein.medium.com/feed/'

    try {
      let feed = await parser.parseURL(url)
      console.log(feed)

      return feed
    } catch (error) {
      console.error(error)
    }
  }
}

// set blogs on load
// const blogs = BlogPostService.getMediumBlogs()
// console.log(blogs)



