import {
  Box,
  VStack,
  Button,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  HStack,
  LinkOverlay,
  LinkBox
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import { IProjectDto } from '../services/projects/project-dto.interface'
import ProjectService from '../services/projects/project.service'
import githubProjects from './api/projects'

interface FeatureProps {
  heading: string
  text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  )
}

const Projects = () => {
  const projects = githubProjects.projects.map((project: IProjectDto) => ProjectService.ProjectFromDto(project))


  return (
    <Box
      as={Container}
      maxW={'7xl'}
      p="12"
    >
      <VStack alignItems="flex-start" spacing="20px">
        <chakra.h2 fontSize="3xl" fontWeight="700">
          Brandon's Projects
        </chakra.h2>
        <LinkBox>
          <Button
            colorScheme={'blue'}
            bg={'blue.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'blue.500',
            }}>
            <LinkOverlay
              href={'https://github.com/brawblan'}
              target={'_blank'}
            >
              <HStack>
                <Box>Visit my GitHub</Box>
                <Box><FaGithub /></Box>
              </HStack>
            </LinkOverlay>
          </Button>
        </LinkBox>
      </VStack>
      <Divider mt={12} mb={12} />
      <HStack
        wrap={'wrap'}
        justify={'space-between'}
        align={'top'}
      >
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </HStack>
    </Box>
  )
}

export default Projects