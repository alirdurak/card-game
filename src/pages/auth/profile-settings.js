

import Navbar from '../../components/navbar'
import PasswordChange from '../../components/profile/password-change'
import UserSettings from '../../components/profile/user-settings'
import { Center,Box} from '@chakra-ui/react'
function ProfileSettings() {
  
        
  return (
    <div>
        <Navbar/>
        <Box marginTop="20" paddingY="10" >
          <Center>
              <UserSettings/>
          </Center>
        
          <Center marginTop="10" >
              <PasswordChange/>
          </Center>
        </Box>

                   
                         
         
      
    </div>
  )
}

export default ProfileSettings
