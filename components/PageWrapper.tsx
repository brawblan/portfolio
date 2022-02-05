import React from 'react'
import { Flex } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const PageWrapper = () => {

  return (
    <>
      <Flex
        direction={'column'}
        justify={'space-between'}
        w={'100vw'}
        h="100vh"
      >
        <NavBar />

        <Flex>Hello world</Flex>

        <Footer />
      </Flex>
    </>
  )
}
