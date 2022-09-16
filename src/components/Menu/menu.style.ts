import styled, { keyframes } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

type Open = {
  open: boolean
}

export const Menu = styled.div`
  /* width: 16rem; */
  align-items: center;
`

export const Container = styled.div`
  /* width: 10vw; */
  /* width: 15vw; */
  /* width: 19rem; */
  /* height: 40vh; */
  /* padding: 40px; */
  background-color: #ffffff;
  color: red;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
`
export const ContainerOne = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  /* width: 19rem; */
  width: 100%;
`

export const ContainerTwo = styled.div<Open>`
  /* width: 80px;
  height: 80px; */
  width: 28px;
  height: 28px;
  /* border: 1px solid #e1e5e9; */
  /* border-radius: 10px; */
  /* background-color: #f0f4f7; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  span {
    position: absolute;
    /* width: 60px;
    height: 8px; */
    width: 24px;
    height: 4px;
    /* background-color: #3a7bec; */
    background-color: #808080;
    border-radius: 4px;
    transition: 0.5s;
  }

  span:nth-child(1) {
    transform: ${({ open }) =>
      open ? 'translateY(0px) rotate(45deg)' : 'translateY(-9px)'};
  }
  span:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(80px)' : 'translateX(0px)')};
  }
  span:nth-child(3) {
    transform: ${({ open }) =>
      open ? 'translateY(0px) rotate(315deg)' : 'translateY(9px)'};
    transition-delay: 0.15s;
  }
`

const textanimation = keyframes`
  0%{background-position: 0%;}
  100%{background-position: 400%;}
`
export const DanhMuc = styled.div`
  margin-left: 0.5rem;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ffff00,
    #ff00f3,
    #0033ff,
    #ff00c4,
    #ff0000
  );
  background-size: 400%;
  font-size: 14px;
  font-weight: 600;
  word-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${textanimation} 10s linear infinite;
`

export const Wrapper = styled.div`
  position: absolute;
  /* top: 120px; */
  top: 36px;
  /* width: 19rem; */
  /* width: 100%; */
  left: 0;

  width: 16rem;
`
export const Arrow = styled.div<Open>`
  position: absolute;
  width: 0;
  height: 0;
  /* top: -15px;
  left: 20px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #f0f4f7; */

  top: -19px;
  left: -2px;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  /* border-bottom: 16px solid #4297d7; */
  border-bottom: 20px solid #f0f4f7;

  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.25s ease-in-out;
  z-index: 4000;
`
export const DropDown = styled.div<Open>`
  z-index: 5000;
  position: relative;
  margin-top: -0.5rem;
  border-radius: 8px;
  border: ${({ open }) => (open ? '1px' : '0px')} solid #e1e5e9;
  /* width: 200px; */
  /* width: 19rem; */
  height: fit-content;
  max-height: ${({ open }) => (open ? '700px' : '0px')};
  background-color: #e4e6eb;
  /* background-color: #f0f4f7; */
  overflow: hidden;
  transition: all 0.25s ease-in-out;
`
export const Item = styled.div`
  color: black;
  margin: 10px;
  font-weight: 600;
  font-size: 20px;

  :hover {
    color: #3a7bec;
    cursor: pointer;
  }
`

//
//
//
//
//
//

export const Sidebar = styled.div`
  /* width: 180px; */
  /* hoặc */
  width: 19rem;
`
export const Brief = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #efefef;
`

export const BriefLeft = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.09);
`

export const BriefImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BriefRight = styled.div`
  flex-grow: 1;
  padding-left: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const BriefUsername = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`

export const BriefEdit = styled(Link)`
  color: #888;
  text-transform: capitalize;
`

export const SidebarMenu = styled.div`
  margin-top: 2.7rem;
`

export const SidebarMenuEntry = styled(NavLink)`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 1.8rem;
  transition: color 0.1s ease;
  color: rgba(0, 0, 0, 0.8);
  &:hover,
  &.active {
    color: #ee4d2d;
  }
`

export const SidebarMenuEntryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 50%;
  img {
    width: 20px;
    height: 20px;
  }
`

//
//
//
//
//
//
//
//
//
//
//
//
//
export const LinkTest = styled(NavLink)`
  display: flex;
  color: #030303;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  :hover {
    background: #e5e5e5;
    color: #000;
    transition: all 0.5s;
  }
`
export const Icon = styled.div`
  font-size: 20px;
`
export const LinkText = styled.div`
  font-size: 18px;
`

export const CategoryItem = styled.li`
  padding: 8px 12px 10px;
  display: flex;
  align-items: center;
  a {
    color: rgba(0, 0, 0, 0.8);
    &.active {
      /* font-weight: 700;
      color: #ee4d2d; */
      background: linear-gradient(
        90deg,
        #ff0000,
        #ffff00,
        #ff00f3,
        #0033ff,
        #ff00c4,
        #ff0000
      );
      background-size: 400%;
      font-size: 14px;
      font-weight: 600;
      word-spacing: 5px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      animation: ${textanimation} 10s linear infinite;
    }
  }
`
