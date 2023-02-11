import React from 'react'
import { FiUser,FiImage } from 'react-icons/fi'
import {  InputGroup, InputLeftAddon, Button, Icon, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
function UserSettings() {
    const formik = useFormik({
        initialValues: {
            displayName:"",
            image:""

        },
        onSubmit: values =>{

        }
    })
  return (
    <div>
         
                        <InputGroup padding={3} size="lg">
                          <InputLeftAddon children={<Icon as={FiUser} />} />
                          <Input name='displayName'  variant="outlined" placeholder='User Name' onChange={formik.handleChange}/>
                        </InputGroup>                              
                        <InputGroup padding={3} size="lg">
                          <InputLeftAddon children={<Icon as={FiImage} />} />
                          <Input name='image'  variant="outlined" placeholder='Profile Image' onChange={formik.handleChange}/>
                          </InputGroup>
                          <Button colorScheme="blue" onClick={formik.handleSubmit}>Update</Button>
      
    </div>
  )
}

export default UserSettings

