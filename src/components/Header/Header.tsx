import { Fragment } from 'react'
import { ClickAwayListener, IconButton } from '@material-ui/core'
import { useState } from 'react'
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import Cart from '../Cart/Cart'
import InputApi from '../InputApi/InputApi'
import Menu from '../Menu/Menu'
import Desktop from '../Responsive/Desktop'
import Mobile from '../Responsive/Mobile'
import Tablet from '../Responsive/Tablet'
import SearchSpeechApi from '../SearchSpeechApi/SearchSpeechApi'
import * as S from './header.style'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import Popover from '../Popover/Popover'
import { useSelector } from 'react-redux'
import usePopover from 'src/hooks/usePopover'
import { useDispatch } from 'react-redux'
import { logout } from 'src/slice/auth/auth.slice'

import imageName from './imageName.png'
import UserLoginLogout from '../UserLoginLogout/UserLoginLogout'
type ProfileState = {
  auth: {
    profile: {
      name: ''
      email: ''
    }
  }
}
export default function Header() {
  const [openOne, setOpenOne] = useState(false)
  const handleClickOne = () => {
    setOpenOne(prev => !prev)
  }

  const handleClickAwayOne = () => {
    setOpenOne(false)
  }

  // const authenticated = useAuthenticated()

  // const profile = useSelector((state: ProfileState) => state.auth.profile)
  // const { activePopover, showPopover, hidePopover } = usePopover()
  // const dispatch = useDispatch()

  // const handleLogout = () => dispatch(logout())

  // const UserImageAvatar = imageName

  return (
    <div style={{ marginBottom: '6rem' }}>
      <Mobile>
        <S.Header>
          <S.HeaderLeft className="left ">
            <S.Logo to={path.home}>
              Anh<span>Shop</span>
            </S.Logo>

            <div
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handleClickAwayOne}
              >
                <div>
                  <IconButton onClick={handleClickOne}>
                    <AiOutlineSearch fontSize="large" className="icon" />
                  </IconButton>
                  {openOne && (
                    <span
                      style={{
                        position: 'absolute',
                        width: '145%',
                        top: '0',
                        left: '-40%',
                        zIndex: '100'
                      }}
                    >
                      <InputApi />
                    </span>
                  )}
                </div>
              </ClickAwayListener>
              <SearchSpeechApi />
              <Menu />
            </div>
          </S.HeaderLeft>

          <S.HeaderRight className="right">
            <Cart />

            <UserLoginLogout />
          </S.HeaderRight>
        </S.Header>
      </Mobile>

      <Tablet>
        <S.Header>
          <S.HeaderLeft className="left">
            <S.Logo to={path.home}>
              Anh<span>Shop</span>
            </S.Logo>

            <InputApi />
          </S.HeaderLeft>

          <S.HeaderRight className="right">
            <SearchSpeechApi />
            <Cart />

            {/* {authenticated && (
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
            )} */}
            <UserLoginLogout />
          </S.HeaderRight>
        </S.Header>
      </Tablet>

      <Desktop>
        <S.Header>
          <S.HeaderLeft className="left">
            <S.Logo to={path.home}>
              Anh<span>Shop</span>
            </S.Logo>

            <InputApi />
          </S.HeaderLeft>

          <S.HeaderRight className="right">
            <SearchSpeechApi />
            <Cart />

            {/* {authenticated && (
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
            )} */}
            <UserLoginLogout />
          </S.HeaderRight>
        </S.Header>
      </Desktop>
    </div>
  )
}
