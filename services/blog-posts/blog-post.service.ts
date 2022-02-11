import axios from 'axios'
import { IBlogDto } from './blog-post-dto.interface'
import { BlogPost } from './blog-post.class'

export class BlogPostService {
  static BlogPostFromDto = (dto: IBlogDto): BlogPost => {
    return new BlogPost(
      dto.creator,
      dto.title,
      dto.link,
      dto.pubDate,
      dto?.['content:encoded'],
      dto?.['content:encodedSnippet'],
      dto?.['dc:creator'],
      dto.guid,
      dto.categories,
      dto.isoDate,
    )
  }

  static getMediumBlogs = async () => {
    const url = 'http://192.168.0.57/medium'

    try {
      let feed = await (await axios.get(url)).data.items

      return feed.map((post: IBlogDto) => BlogPostService.BlogPostFromDto(post))
    } catch (error) {
      console.error(error)
    }
  }
}

// TODO: once I can get the servers playing nice OR create my own database I'll need this

// website used to get promise returning correctly to be used as an array
// https://devtrium.com/posts/async-functions-useeffect 

// const [blogs, setBlogs] = useState<Array<BlogPost>>([])

  // const fetchBlogData = useCallback(async () => {
  //   const fetchData = await BlogPostService.getMediumBlogs()
  //   setBlogs(fetchData)
  // }, [])

  // useEffect(() => {
  //   fetchBlogData()

  // }, [fetchBlogData])
