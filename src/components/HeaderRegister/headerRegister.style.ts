import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  min-width: max-content;
  width: 100%;
  box-shadow: 0 6px 6px rgb(0 0 0 / 6%);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
`

export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.div`
  color: #222;
  font-size: 2.4rem;
  margin-left: 1.2rem;
`

const animate = keyframes`
0%{background-position: 0%;}
100%{background-position: 400%;}
`
export const Logo = styled(Link)`
  flex-shrink: 0;
  /*  */
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  /*  */
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
  font-size: 27px;
  font-weight: 600;
  word-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${animate} 10s linear infinite;

  /*  */
  margin-right: 10px;
`
