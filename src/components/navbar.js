import React from 'react'

import { Flex,Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { logout } from '../firebase/logout'
import { useDispatch,useSelector } from 'react-redux'
import { logoutMethod } from '../redux/auth-slice'

function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector(state=> state.auth.user)
  const handleLogout = () => {
    logout()
    dispatch(logoutMethod())
  }

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
            user &&  <Button onClick={handleLogout} colorScheme="blue">
            Log Out
          </Button>
          }
    {
      !user &&<Flex gap={4} >
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
