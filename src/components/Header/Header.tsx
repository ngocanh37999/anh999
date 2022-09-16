import { ClickAwayListener, IconButton } from '@material-ui/core'
import { useState } from 'react'
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch
} from 'react-icons/ai'
import { path } from 'src/constants/path'
import Cart from '../Cart/Cart'
import InputApi from '../InputApi/InputApi'
import Menu from '../Menu/Menu'
import Desktop from '../Responsive/Desktop'
import Mobile from '../Responsive/Mobile'
import Tablet from '../Responsive/Tablet'

import SearchSpeechApi from '../SearchSpeechApi/SearchSpeechApi'
import * as S from './header.style'
export default function Header() {
  const [openOne, setOpenOne] = useState(false)
  const handleClickOne = () => {
    setOpenOne(prev => !prev)
  }

  const handleClickAwayOne = () => {
    setOpenOne(false)
  }
  return (
    <div style={{ marginBottom: '6rem' }}>
      {/* <S.Header>
        <S.HeaderLeft className="left">
          <S.Logo to="">
            Anh<span>Shop</span>
          </S.Logo>

          <IconButton>
            <AiOutlineSearch fontSize="large" className="icon" />
          </IconButton>
          <InputApi />

          <SearchSpeechApi />
        </S.HeaderLeft>

        <S.HeaderRight className="right">
          <Cart />
          <IconButton>
            <AiOutlineLogin fontSize="large" className="icon" />
          </IconButton>
          <IconButton>
            <AiOutlineLogout fontSize="large" className="icon" />
          </IconButton>
        </S.HeaderRight>
      </S.Header> */}

      {/* <S.Header>
        <S.HeaderLeft className="left">
          <S.Logo to="">
            Anh<span>Shop</span>
          </S.Logo>

          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAwayOne}
          >
            <div style={{ position: 'relative', width: '100%' }}>
              <IconButton onClick={handleClickOne}>
                <AiOutlineSearch fontSize="large" className="icon" />
              </IconButton>
              {openOne && (
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: '0',
                    left: '0',
                    zIndex: '100'
                  }}
                >
                  <InputApi />
                </span>
              )}
            </div>
          </ClickAwayListener>

          <SearchSpeechApi />
        </S.HeaderLeft>

        <S.HeaderRight className="right">
          <Cart />
          <IconButton>
            <AiOutlineLogin fontSize="large" className="icon" />
          </IconButton>
          <IconButton>
            <AiOutlineLogout fontSize="large" className="icon" />
          </IconButton>
        </S.HeaderRight>
      </S.Header> */}

      {/* responsive */}
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
            <IconButton>
              <AiOutlineLogin fontSize="large" className="icon" />
            </IconButton>
            <IconButton>
              <AiOutlineLogout fontSize="large" className="icon" />
            </IconButton>
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
            <IconButton>
              <AiOutlineLogin fontSize="large" className="icon" />
            </IconButton>
            <IconButton>
              <AiOutlineLogout fontSize="large" className="icon" />
            </IconButton>
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
            <IconButton>
              <AiOutlineLogin fontSize="large" className="icon" />
            </IconButton>
            <IconButton>
              <AiOutlineLogout fontSize="large" className="icon" />
            </IconButton>
          </S.HeaderRight>
        </S.Header>
      </Desktop>
    </div>
  )
}
