import { useFormik } from 'formik'
import { Box, InputGroup, InputLeftAddon, Button, Heading, Icon, Input } from '@chakra-ui/react'
import { FiLock, FiMail} from  "react-icons/fi"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginMethod } from '../redux/auth-slice'




export default function Form(props) {
  
const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: async (values) => {
     const currentUser = await props.method(values.email, values.password)
     dispatch(loginMethod(currentUser))

  }});

  return (    
    <div>
      <Box >
        <Box display="flex"  heigth="2xl"  flexDir="column" alignItems="center" marginTop={40} padding={5}>
          <Link to="/">
          <Heading as="h1" fontSize="60" marginBottom={8} >CARDLY</Heading>
          </Link>
          <Box display="flex" flexDir="column"   alignItems="center" zIndex={2} width="xl"   bg="green.100" borderRadius="xl" h={400} padding={3} boxShadow="2xl" >
              <Heading>{props.heading}</Heading>

              <Box  width="md" padding={5} zIndex={1} >
                  <InputGroup padding={3} size="lg">
                      <InputLeftAddon children={<Icon as={FiMail} />} />
                      <Input name='email' type="email" variant="outlined" placeholder='E-mail' onChange={formik.handleChange}/>
                  </InputGroup>
                  <InputGroup  padding={3} size="lg">
                        <InputLeftAddon children={<Icon as={FiLock} />} />
                        <Input name='password' variant="outlined" placeholder='Password'
                        type="password" onChange={formik.handleChange} />
                  </InputGroup>
                  <Button onClick={formik.handleSubmit} colorScheme="blue"  variant="solid">{props.sign}</Button>
              </Box>
              <Button colorScheme="blue"  marginRight={3}  variant="solid">Sign with Google</Button>
          </Box>
        </Box>
          <Link to={`/${props.redirect}`}>
              <Button  variant="link">{props.redirectName}  </Button>
          </Link>
      
      </Box>
    </div>
  )
}
