import { useFormik } from 'formik';
import { reAuth } from '../../firebase/auth/reauth';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button,
    Center
  } from '@chakra-ui/react'

 export default function ReauthModal({ isOpen, onOpen, onClose }) {
  const formik = useFormik({
    initialValues: {
      password: '',
      
    },
    onSubmit: async values => {
      await reAuth(values.password)
      onClose()
    
  }});
  
    
    return (
      <>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please reauthenticate</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingY="5">
            
             <Center>
               <Input name="password" type="password" placeholder='Please enter your password' onChange={formik.handleChange}></Input>
             </Center>
               <Center colorScheme='blue' marginY="2" onClick={formik.handleSubmit}><Button>Login</Button></Center>
            </ModalBody>
  
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }