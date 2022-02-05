import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import customTheme from '../styles/theme/index'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Stack
        h={'100vh'}
        justify={'space-between'}
        align={'center'}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </ChakraProvider>
  )
}

export default MyApp
