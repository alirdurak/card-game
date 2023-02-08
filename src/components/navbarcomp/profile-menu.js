import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Icon
} from '@chakra-ui/react'
import { logout } from '../../firebase/logout'
import { logoutMethod } from '../../redux/auth-slice'
import { useDispatch } from 'react-redux'
import {BsGear} from "react-icons/bs"
function ProfileMenu() {
  const dispatch = useDispatch()

  const handleLogout = async() => {
    await logout()
    dispatch(logoutMethod())
  }

  return (
    <div>
        <Menu>
  <MenuButton as={Button}  bgColor="green.100" >
    <Icon  as={BsGear}></Icon>
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
      
    </MenuGroup>
  </MenuList>
</Menu>
      
    </div>
  )
}

export default ProfileMenu
