
import {  InputGroup, InputLeftAddon, Button,  Icon, Input, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FiLock } from 'react-icons/fi' 
import { changePassword } from '../../firebase/auth/change-password'
import ReauthModal from '../../components/profile/reauth-modal'



function PasswordChange() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      
    },
    onSubmit: async values => {
    const error = await changePassword(values.newPassword)
      error && onOpen()
    },
  });
  return (
    <div>
       <InputGroup padding={3} size="lg">
            <InputLeftAddon children={<Icon as={FiLock} />} />
            <Input name='newPassword' type="password" variant="outlined" placeholder='Change your password' onChange={formik.handleChange}/>
          </InputGroup>
        <Button colorScheme="blue" onClick={formik.handleSubmit}>Change Password</Button>
    <ReauthModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                    
      
    </div>
  )
}

export default PasswordChange
