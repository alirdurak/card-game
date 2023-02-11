import React from 'react'
import { FiUser,FiImage } from 'react-icons/fi'
import {  InputGroup, InputLeftAddon, Button, Icon, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { profileUpdate } from '../../firebase/auth/update-profile'
import { useDispatch } from 'react-redux'
import { loginMethod } from '../../redux/auth-slice'
function UserSettings() {
  const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            displayName:"",
            photoURL:""

        },
        onSubmit: async (values) =>{
        const user = await profileUpdate( values.displayName, values.photoURL)
          dispatch(loginMethod(user))
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
                          <Input name='photoURL'  variant="outlined" placeholder='Profile Image' onChange={formik.handleChange}/>
                          </InputGroup>
                          <Button colorScheme="blue" onClick={formik.handleSubmit}>Update</Button>
      
    </div>
  )
}

export default UserSettings

