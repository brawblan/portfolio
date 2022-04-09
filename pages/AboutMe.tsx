import { Box, Button, Center, chakra, HStack, LinkBox, LinkOverlay, VStack, Text, Divider, Container } from '@chakra-ui/react'
import React from 'react'
import { AiFillMediumCircle } from 'react-icons/ai'

const AboutMe = () => {
  return (
    <Box
      as={Container}
      maxW={'7xl'}
      p="12"
    >
      <Box alignItems="flex-start" spacing="20px">
        <chakra.h2 fontSize="3xl" fontWeight="700">
          About Brandon
        </chakra.h2>
      </Box>
      <Divider mt={12} mb={12} />
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          w='50vw'
        >
          🤠 Howdy! I'm Brandon!
          I keep myself busy with a few things:

          Building the next big app that will revolutionize the fitness/nutrition industry
          Leading a large group and facilitating their needs for success
          Writing blog posts on Medium
          Learning Full Stack Web Development with Devslopes
          Working with Devslopes as a Web Developer and in the Devslopes 30 Day JavaScript Challenge as a Code Coach
          Some Things I Love ❤️‍🔥
          Languages & Tools
          Front End
          HTML5 CSS3 SASS TailWindCSS JavaScript TypeScript ReactJS VueJS

          Back End
          NodeJS

          Automation
          Netlify Vercel

          Misc
          NPM GIT
        </Box>
    </Box>
  )
}

export default AboutMe
