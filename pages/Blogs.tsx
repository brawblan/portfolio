import React from 'react'
import { BlogPostService } from '../services/blog-posts/blog-post.service'
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Grid,
} from '@chakra-ui/react'
import { createIdFromGuid } from '../global/helpers'
import blogPosts from './api/medium-blogs'
import { IBlogDto } from '../services/blog-posts/blog-post-dto.interface'
import BlogCard from '../components/BlogCard'

interface BlogAuthorProps {
  date: Date
  name: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const Blogs = () => {
  const blogs = blogPosts.items.map((post: IBlogDto) => BlogPostService.BlogPostFromDto(post))

  return (
    <Container
      maxW={'7xl'}
      p="12"
    >
      <Heading as="h1">
        {blogPosts.title}
      </Heading>
      <Divider marginTop="5" />
      <Flex
        wrap={'wrap'}
        justify={'space-between'}
      >
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Flex>
    </Container>
  )
}

export default Blogs
