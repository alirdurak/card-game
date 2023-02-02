import {useEffect, useState} from 'react'
import Form from '../../components/form'
import { auth, register } from '../../firebase/create-user'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    email: "",
    password:""
  })

  useEffect(()=>{
    register(user.email, user.password)
    // if(auth.currentUser){
    //   navigate("/")
    // }
  },[user,setUser])

  
  return (
    <div>
      <Form heading="SIGN UP" sign="Register" redirect="login" redirectName="Do you have an account?" method={setUser} />

    </div>
  )
}

export default SignUp
