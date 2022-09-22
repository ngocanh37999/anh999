import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import { IconButton } from '@material-ui/core'
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch
} from 'react-icons/ai'
import imageName from './imageName.png'
import * as S from './userLoginLogout.style'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import { logout } from 'src/slice/auth/auth.slice'
import { useDispatch } from 'react-redux'
import Popover from '../Popover/Popover'

type RootState = {
  auth: {
    profile: {
      name: ''
      email: ''
    }
  }
}
export default function UserLoginLogout() {
  const authenticated = useAuthenticated()

  const profile = useSelector((state: RootState) => state.auth.profile)
  const { activePopover, showPopover, hidePopover } = usePopover()
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  const UserImageAvatar = imageName
  return (
    <>
      {authenticated && (
        <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
          <S.UserImage src={UserImageAvatar} />
          <S.UserName>{profile.name || profile.email}</S.UserName>
          <Popover active={activePopover}>
            <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
            <S.UserLink to="">Đơn mua</S.UserLink>
            <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
          </Popover>
        </S.User>
      )}

      {!authenticated && (
        <Fragment>
          <Link to={path.login}>
            <IconButton>
              <AiOutlineLogin fontSize="large" className="icon" />
            </IconButton>
          </Link>

          <Link to={path.register}>
            <IconButton>
              <AiOutlineLogout fontSize="large" className="icon" />
            </IconButton>
          </Link>
        </Fragment>
      )}
    </>
  )
}
