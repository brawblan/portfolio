import axios from 'axios'
import { IBlogDto } from './blog-post-dto.interface'
import { BlogPost } from './blog-post.class'

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
    const url = 'https://192.168.0.57/medium'

    try {
      let feed = await (await axios.get(url)).data.items

      return feed.map((post: IBlogDto) => BlogPostService.BlogPostFromDto(post))
    } catch (error) {
      console.error(error)
    }
  }
}
