import {useEffect, useState} from 'react'
import Form from '../../components/form'
import { signIn } from '../../firebase/login'


function Login() {
  const [user,setUser] = useState({
    email: "",
    password:""
  })

  useEffect(()=>{
    signIn(user.email, user.password)

  },[user])



  return (
    <div>
      <Form heading="SIGN IN" sign="Login" redirect="signup" redirectName="Sign Up" method={setUser} />
    </div>
  )
}

export default Login
