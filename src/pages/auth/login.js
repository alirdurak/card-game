import React from 'react'
import { Box, InputGroup, InputLeftAddon, Button, Heading, Icon, Input } from '@chakra-ui/react'
import {FiUser, FiLock} from  "react-icons/fi"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <Box >
        <Box display="flex"  heigth="2xl"  flexDir="column" alignItems="center" marginTop={40} padding={5}>
          <Link to="/">
          <Heading as="h1" fontSize="60" marginBottom={8} >CARDLY</Heading>
          </Link>
          <Box display="flex" flexDir="column"   alignItems="center" zIndex={2} width="xl"   bg="green.100" borderRadius="xl" h={400} padding={3} boxShadow="2xl" >
              <Heading>SIGN IN</Heading>
              <Box width="md" padding={5} zIndex={1} >
              <InputGroup padding={3} size="lg">
              <InputLeftAddon children={<Icon as={FiUser} />} />
              <Input variant="outlined" placeholder='Username'/>
              </InputGroup>
              <InputGroup  padding={3} size="lg">
                <InputLeftAddon children={<Icon as={FiLock} />} />
                <Input variant="outlined" placeholder='Password'
                type="password" />
              </InputGroup>
              <Button colorScheme="blue"  variant="solid">Login</Button>
              </Box>
              <Button colorScheme="blue"  marginRight={3}  variant="solid">Sign with Google</Button>
          </Box>
        </Box>
          <Link to="/signup">
              <Button variant="link">Sign Up</Button>
          </Link>
      
      </Box>
    </div>
  )
}

export default Login
