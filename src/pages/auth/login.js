import Form from '../../components/form'
import { signIn } from '../../firebase/login'

function Login() {


 


  return (
    <div>
      <Form heading="SIGN IN" sign="Login" redirect="signup" redirectName="Sign Up" method={signIn}  />
    </div>
  )
}

export default Login
