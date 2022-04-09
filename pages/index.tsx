import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import style from '../styles/Home.module.css'
import { FaReact, FaNodeJs, FaRaspberryPi } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiMysql, SiMariadb, SiNginx } from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'
import { BsTerminalFill } from 'react-icons/bs'
import { RiMickeyFill } from 'react-icons/ri'

const Home = () => {
  if(process.browser) {
    const elm = document.querySelector('ul.topSlider')
    for (let i = 0; i < 6; i += 1) {
      elm?.appendChild(elm.children[i].cloneNode(true))
    }
    const bottomElm = document.querySelector('ul.bottomSlider')
    for (let i = 0; i < 6; i += 1) {
      bottomElm?.appendChild(bottomElm.children[i].cloneNode(true))
    }
  }
  

  return (
    <>
      <Head>
      </Head>
      <Container 
        maxW={'4xl'}        
      >
        <Container
          as={'div'}
          className={`${style.slider} slider`}
          w={'full'}
          maxW={'full'}
          mx={0}
        >
          <ul className={`${style.sliderContent} topSlider`}>
            <li><SiJavascript fill={'#ECC94B'} /></li>
            <li><FaNodeJs fill={'#2F855A'} /></li>
            <li><SiTypescript fill={'#3182ce'} /></li>
            <li><FaReact fill={'#4299e1'} /></li>
            <li><SiNextdotjs fill={'black'} /></li>
            <li><IoLogoVue fill={'#48BB78'} /></li>
          </ul>
        </Container>

        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          opacity={0.9}
          maxH={'sm'}
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

        <Container
          as={'div'}
          className={style.slider}
          w={'full'}
          maxW={'full'}
          mx={0}
        >
          <ul className={`${style.sliderContentBottom} bottomSlider`}>
            <li>
              <Tooltip label='Raspberry Pi' fontSize={'md'}>
                <span>
                  <FaRaspberryPi fill={'#9B2C2C'} />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label='mariaDB' fontSize={'md'}>
                <span>
                  <SiMariadb fill={'#319795'} />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label='MySQL' fontSize={'md'}>
                <span>
                  <SiMysql fill={'#ED8936'} />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label='Nginx' fontSize={'md'}>
                <span>
                  <SiNginx fill={'#38A169'} />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label='Terminal' fontSize={'md'}>
                <span>
                  <BsTerminalFill fill={'black'} />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label='I LOVE DISNEY' fontSize={'md'}>
                <span>
                  <RiMickeyFill fill={'#E53E3E'} />
                </span>
              </Tooltip>
            </li>
          </ul>
        </Container>
      </Container>
    </>
  )
}

export default Home