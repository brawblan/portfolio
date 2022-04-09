import React from 'react'
import { BlogPostService } from '../services/blog-posts/blog-post.service'
import {
  Image,
  Text,
  Divider,
  HStack,
  Container,
  Box,
  VStack,
  chakra,
  LinkBox,
  Button,
  LinkOverlay,
  Center,
  Flex,
} from '@chakra-ui/react'
import blogPosts from './api/medium-blogs'
import { IBlogDto } from '../services/blog-posts/blog-post-dto.interface'
import BlogCard from '../components/BlogCard'
import { FaMedium } from 'react-icons/fa'
import { AiFillMediumCircle } from 'react-icons/ai'

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
    <Box
      as={Container}
      maxW={'7xl'}
      p="12"
    >
      <VStack alignItems="flex-start" spacing="20px">
        <chakra.h2 fontSize="3xl" fontWeight="700">
          Brandon's Blogs
        </chakra.h2>
        <LinkBox>
          <Button
            colorScheme={'blue'}
            bg={'blue.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'blue.500',
            }}
          >
            <LinkOverlay
              href={'https://brandonblankenstein.medium.com/'}
              target={'_blank'}
            >
              <HStack>
                <Text>
                  Visit My
                </Text>
                <Center
                  borderRadius={'full'}
                  bg={'transparent'}
                >
                  <AiFillMediumCircle
                    style={{ "height": '1.5rem', 'width': '100%' }}
                  />
                  <Text>
                    edium
                  </Text>
                </Center>
                <Text>
                  Page
                </Text>
              </HStack>
            </LinkOverlay>
          </Button>
        </LinkBox>
      </VStack>
      <Divider mt={12} mb={12} />
      <Flex
        wrap={'wrap'}
        justify={'space-between'}
        align={'top'}
      >
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Flex>
    </Box>
  )
}

export default Blogs
