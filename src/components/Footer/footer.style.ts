import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0%{background-position: 0%;}
  100%{background-position: 400%;}
`
export const FooterController = styled.footer`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 4.2rem 0 3.7rem;
  background: #f5f5f5;
  width: 100%;
  min-width: max-content;
`
export const FooterList = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
export const Footer = styled.div`
  flex: 0 0 26%;
  max-width: 26%;
  padding: 0 5px;
  margin: 5px 0;
`
export const FooterItem = styled.div``
export const FooterItemWrapper = styled.div``
export const Content = styled.div``

export const FooterItemInfo = styled.div``

export const FooterItemTitle = styled.h4`
  font-size: 18px;

  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    width: 50px;
    height: 2px;
  }
`

export const FooterItemMeta = styled.div``
export const FooterItemMetaItem = styled(Link)`
  font-size: 16px;
  text-transform: capitalize;

  text-decoration: none;
  font-weight: 300;

  display: block;
  transition: all 0.3s ease;
  :hover {
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
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: ${animate} 10s linear infinite;
  }
`

export const Footer1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: space-between;
`
export const Language = styled.div`
  display: flex;
  span {
    padding: 0 0.3125rem;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &.active {
      color: #ee4d2d;
    }
  }
`

export const FooterListTabletOrMobile = styled.div``
export const FooterTabletOrMobile = styled.div`
  padding: 0 5px;
  margin: 5px 0;
`
export const FooterItemTabletOrMobile = styled.div``
