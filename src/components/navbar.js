import React from 'react'

import { Flex,Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/create-user'

function Navbar() {
  return (
    <div>
         <Flex
         boxShadow="lg"
      align="center"
      justify="space-between"
      h={16}
     bgColor="green.100"
      >
        <Heading paddingLeft={3}
        >CARDLY</Heading>
          
        <Flex gap={4} marginRight={2}>

          {
            auth.currentUser &&  <Button colorScheme="blue">
            Log Out
          </Button>
          }
    {
      !auth.currentUser &&<Flex gap={4} >
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
    }
          
        </Flex>
      </Flex>
      
    </div>
  )
}

export default Navbar
