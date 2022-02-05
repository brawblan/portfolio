import axios from 'axios';
import { IBlogDto } from './blog-post-dto.interface';
import { BlogPost } from './blog-post.class';

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
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbrandonblankenstein.medium.com%2Ffeed'
    try { 
      const response = await axios.get(url)
      const blogs = response.data.items as Array<IBlogDto>      
      
      return blogs.map((blog) => BlogPostService.BlogPostFromDto(blog)) as Array<BlogPost>
    } catch (error) {
      console.error(error)
    }
  }
}

// set blogs on load
const blogs = BlogPostService.getMediumBlogs()
console.log(typeof blogs, 'blogs');


