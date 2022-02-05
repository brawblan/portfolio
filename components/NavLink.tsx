import { Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { LinkObject } from '../global/types'

export const NavLink = ({ route, title }: LinkObject) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.700'),
    }}
    href={route}
  >
    {title}
  </Link>
)
