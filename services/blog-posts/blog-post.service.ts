import { IBlogDto } from './blog-post-dto.interface'
import { BlogPost } from './blog-post.class'
let Parser = require('rss-parser')
let parser = new Parser()

export class BlogPostService {
  static BlogPostFromDto = (dto: IBlogDto): BlogPost => {
    return new BlogPost(
      dto.categories,
      dto?.['content:encoded'],
      dto?.['content:encodedSnippet'],
      dto.creator,
      dto.dc_creator,
      dto.description,
      dto.guid,
      dto.isoDate,
      dto.link,
      dto.pubDate,
      dto.title,
    )
  }

  static getMediumBlogs = async () => {
    const url = 'http://localhost:4000/medium'

    try {
      let feed = await parser.parseURL(url)
      return feed.items.map((post: IBlogDto) => BlogPostService.BlogPostFromDto(post))
    } catch (error) {
      console.error(error)
    }
  }
}
