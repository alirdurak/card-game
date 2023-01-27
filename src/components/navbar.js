import React from 'react'

import { Flex,Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <Flex
         boxShadow="lg"
      align="center"
      justify="space-between"
      h={16}
      sx={{
        backgroundColor:" #B2F5EA"
      }}
      >
        <Heading paddingLeft={3}
        >CARDLY</Heading>
          
        <Flex gap={4} marginRight={2}>
    <Link to='/login' >
          <Button colorScheme="blue">
            Sign In
          </Button>
      </Link>   
    <Link to='/signup' >
          <Button colorScheme="blue">
            Sign Up
          </Button>
      </Link>   
          
        </Flex>
      </Flex>
      
    </div>
  )
}

export default Navbar
