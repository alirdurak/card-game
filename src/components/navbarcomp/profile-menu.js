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
import { useDispatch,useSelector } from 'react-redux'
import {BsGear} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ProfileMenu() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
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
    <Icon  as={BsGear}></Icon>
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <Link to="/profile">
        <MenuItem>My Account</MenuItem>
      </Link>
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
