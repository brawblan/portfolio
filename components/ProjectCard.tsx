import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { ProjectClass } from '../services/projects/project.class'
import ListTag from './ListTag'

const ProjectCard = (project: { project: ProjectClass }) => {
  const { id, nodeId, name, fullName, htmlUrl, description, cardList } = project.project
  return (
    <Center
      py={6}
      minW={'300px'}
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
          align={'center'}>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'xl'} fontWeight={800}>
              {name}
            </Text>
          </Stack>
        </Stack>

        <Box
          bg={useColorModeValue('gray.50', 'gray.700')}
          px={6}
          py={10}
        >
          <Flex
            direction={'column'}
          >
            <Box>
              <ListTag tags={cardList} />
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
                  href={htmlUrl}
                  target={'_blank'}
                >
                  View Repo on GitHub
                </LinkOverlay>
              </Button>
            </LinkBox>
          </Flex>
        </Box>
      </Box>
    </Center>
  )
}

export default ProjectCard