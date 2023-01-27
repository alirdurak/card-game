import React from 'react'
import { Box, InputGroup, InputLeftAddon, Button, Heading, Icon, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {FiUser, FiLock,FiMail} from  "react-icons/fi"
function SignUp() {
  return (
    <div>
       <Box >
        <Box display="flex"  heigth="2xl"  flexDir="column" alignItems="center" marginTop={40} padding={5}>
          <Link to="/">
          <Heading as="h1" fontSize="60" marginBottom={8} >CARDLY</Heading>
          </Link>
          <Box display="flex" flexDir="column"   alignItems="center" zIndex={2} width="xl"   bg="green.100" borderRadius="xl" h={400} padding={3} boxShadow="2xl" >
              <Heading>SIGN UP</Heading>
              <Box width="md" padding={5} zIndex={1} >
              <InputGroup padding={3} size="lg">
              <InputLeftAddon children={<Icon as={FiMail} />} />
              <Input
              type="email" 
              variant="outlined" 
              placeholder='Email'/>
              </InputGroup>
              <InputGroup padding={3} size="lg">
              <InputLeftAddon children={<Icon as={FiUser} />} />
              <Input variant="outlined" placeholder='Username'/>
              </InputGroup>
              <InputGroup  padding={3} size="lg">
                <InputLeftAddon children={<Icon as={FiLock} />} />
                <Input variant="outlined" placeholder='Password'
                type="password" />
              </InputGroup>
              <Button colorScheme="blue"  variant="solid">Register</Button>
              </Box>
              <Button colorScheme="blue"  marginRight={3}  variant="solid">Sign with Google</Button>
          </Box>
        </Box>
        <Link to="/login">
              <Button variant="link">Do you have an account?</Button>
          </Link>
      
      </Box>

    </div>
  )
}

export default SignUp
