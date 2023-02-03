import { register } from '../../firebase/create-user'
import Form from '../../components/form'
function SignUp() {
  

  
  return (
    <div>
      <Form heading="SIGN UP" sign="Register" redirect="login" redirectName="Do you have an account?" method={register}  />

    </div>
  )
}

export default SignUp
