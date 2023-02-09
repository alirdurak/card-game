

import Navbar from '../../components/navbar'
import PasswordChange from '../../components/profile/password-change'
import UserSettings from '../../components/profile/user-settings'
import { Center } from '@chakra-ui/react'
function ProfileSettings() {
  
        
  return (
    <div>
        <Navbar/>
        <Center>
            <UserSettings/>
        </Center>
        <Center>
            <PasswordChange/>
        </Center>

                   
                         
         
      
    </div>
  )
}

export default ProfileSettings
