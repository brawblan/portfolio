import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Flex,
  HStack,
} from '@chakra-ui/react'
import { BlogPost } from '../services/blog-posts/blog-post.class'
import { AiFillMediumCircle } from 'react-icons/ai'
import ListTag from './ListTag'

const BlogCard = (blog: { blog: BlogPost }) => {
  const { categories, link, pubDate, title } = blog.blog
  return (
    <Center
      py={6}
      minW={'300px'}
      w={'330px'}
      h={'full'}
    >
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'blue.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Stack
            direction={'row'}
            align={'center'}
            justify={'center'}
          >
            <Text
              fontSize={'xl'}
              fontWeight={800}
            >
              {title}
            </Text>
          </Stack>
        </Stack>

        <Box
          bg={useColorModeValue('gray.50', 'gray.700')}
          px={6}
          py={6}
        >
          <Text
            mb={'1rem'}
          >
            Published on {new Date(pubDate).toLocaleDateString()}
          </Text>
          <Flex
            direction={'column'}
          >
            <Box>
              <ListTag
                tags={categories}
              />
            </Box>

            <LinkBox
              mt={'2rem'}
            >
              <Button
                colorScheme={'blue'}
                bg={'blue.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'blue.500',
                }}>
                <LinkOverlay
                  href={link}
                  target={'_blank'}
                >
                  <HStack>
                    <Box>
                      Read on
                    </Box>
                    <Box
                      borderRadius={'full'}
                      bg={'transparent'}
                    >
                      <AiFillMediumCircle
                        style={{ "height": '1.5rem', 'width': '100%' }}
                      />
                    </Box>
                  </HStack>
                </LinkOverlay>
              </Button>
            </LinkBox>
          </Flex>
        </Box>
      </Box>
    </Center>
  )
}

export default BlogCard