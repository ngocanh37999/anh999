import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
const animate = keyframes`
  0%{background-position: 0%;}
  100%{background-position: 400%;}
`
export const Header = styled.div`
  background-color: #fff;
  padding: 0.2rem 0.5rem 0;
  display: flex;
  flex-direction: row;
  flex: auto;
  justify-content: space-between;
  position: fixed;
  z-index: 1000000;
  width: 100%;
  top: 0;
  box-shadow: 0px 5px 8px -9px #8d949e;
  /* flex: 1; */
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex: 0.3; */
  flex: 1;
  /* justify-content: flex-end; */
  /* justify-content: space-between; */

  button {
    background-color: #e4e6eb;
    color: #000;
    margin: 0 0.3rem;
    transition: linear 200ms;

    > &:hover {
      background-color: #dadde1;
      transform: translateY(-2px);
    }
  }

  &.left {
    display: flex;
    align-items: center;
    /* padding: 0.6rem 3rem; */
    border-radius: 0.4rem;
    transition: linear 200ms;
  }
`

export const HeaderRight = styled.div`
  /* margin-left: 2px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex: 0.3; */
  flex-shrink: 0;
  /* justify-content: flex-end; */
  /* justify-content: space-between; */

  button {
    background-color: #e4e6eb;
    color: #000;
    margin: 0 0.3rem;
    transition: linear 200ms;

    > &:hover {
      background-color: #dadde1;
      transform: translateY(-2px);
    }
  }

  &.right {
    display: flex;
    align-items: center;
    padding: 0.6rem 0;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0.4rem;
    transition: linear 200ms;
  }
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
  /* font-size: 70px; */
  /* letter-spacing: 5px; */
  /* letter-spacing: 10px; */
  font-size: 27px;
  font-weight: 600;
  word-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${animate} 10s linear infinite;

  /*  */
  margin-right: 10px;
`
