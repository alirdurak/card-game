import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Icon,
  Text
} from '@chakra-ui/react'
import { logout } from '../../firebase/auth/logout'
import { logoutMethod } from '../../redux/auth-slice'
import { useDispatch } from 'react-redux'
import {FiMenu,FiSettings,FiLogOut} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ProfileMenu() {
  const dispatch = useDispatch()
  // const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  const handleLogout = async() => {
    await logout()
      dispatch(logoutMethod())
      navigate("/")
    }

  return (
    <div>
        <Menu>
  <MenuButton as={Button}  bgColor="green.100" >
    <  Icon as={FiMenu}/>
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <Link to="/profile">
        <MenuItem gap="2" >
        <Icon as={FiSettings} /> <Text>User Settings</Text>
        </MenuItem>
      </Link>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup >
      <MenuItem gap="2" onClick={handleLogout}>
        <Icon as={FiLogOut} />
        <Text>Logout</Text></MenuItem>
      
    </MenuGroup>
  </MenuList>
</Menu>
      
    </div>
  )
}

export default ProfileMenu
