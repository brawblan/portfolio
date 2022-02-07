import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react'
import style from '../styles/Home.module.css'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs } from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'

const Home = () => {
  return (
    <>
      <Head>
      </Head>

      <div className={style.iconContainer}>
        <div className={style.x3}>
          <SiJavascript fill={'#ECC94B'} className={style.y3} />
        </div>
        <div className={style.x6}>
          <FaNodeJs fill={'#2F855A'} className={style.y6} />
        </div>
        <div className={style.x5}>
          <SiTypescript fill={'#3182ce'} className={style.y5} />
        </div>
        <div className={style.x4}>
          <FaReact fill={'#4299e1'} className={style.y4} />
        </div>
        <div className={style.x1}>
          <SiNextdotjs fill={'black'} className={style.y1} />
        </div>
        <div className={style.x2}>
          <IoLogoVue fill={'#48BB78'} className={style.y2} />
        </div>
      </div>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          bg={'gray.700'}
          opacity={0.9}
        >
          <Flex
            direction={'column'}
            lineHeight={'110%'}
          >
            <Heading
              as={'h1'}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            >
              Brandon Blankenstein <br />
            </Heading>
            <Text
              as={'span'}
              color={'blue.400'}
              fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
              fontWeight={600}
            >
              Web Developer
            </Text>
          </Flex>
          <Text color={'gray.500'}>
            I&apos;m Brandon, a Web Developer based out of Central Texas!
            I love exploring new technologies and creating websites.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home