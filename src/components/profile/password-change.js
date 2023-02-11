import React from 'react'
import {  InputGroup, InputLeftAddon, Button, Heading, Icon, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FiLock } from 'react-icons/fi' 


function PasswordChange() {
  const formik =useFormik({
    initialValues:{
      password:""
    },
    onsubmit: values =>{

    }
  })
  return (
    <div>
       <InputGroup padding={3} size="lg">
            <InputLeftAddon children={<Icon as={FiLock} />} />
            <Input name='password' type="password" variant="outlined" placeholder='Change your password' onChange={formik.handleChange}/>
          </InputGroup>
        <Button colorScheme="blue" onClick={formik.handleSubmit}>Change Password</Button>
                    
      
    </div>
  )
}

export default PasswordChange
