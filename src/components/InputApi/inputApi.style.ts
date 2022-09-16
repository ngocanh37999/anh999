import { Link } from 'react-router-dom'
import { SearchIcon } from 'src/components/svg/SearchIcon/searchIcon.style'
import styled, { css, keyframes } from 'styled-components'
// import { SearchIcon } from '../svg/SearchIcon/searchIcon.style'

export const Search = styled.div`
  /* flex: 1; */
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form``
export const InputWrapper = styled.div`
  position: relative;
`
export const InputGroupInput = styled.input`
  width: 100%;
  /* height: calc(1em + 1.6em + 0.5em); */
  height: calc(0.9em + 2em + 0.5em);
  font-size: 1.25rem;
  color: #050505;
  line-height: 1;
  border-style: none;
  border: 0.25em solid transparent;
  background-image: linear-gradient(#f5f5f5, #f5f5f5),
    linear-gradient(120deg, #f09 0%, #0ff 50%, #9f0 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 1.8em;
  background-size: 200% 100%;
  outline: none;
  padding: 0.8em 1em;
  transition: background-position 0.8s ease-out;
  :hover {
    background-position: 100% 0;
  }

  &.animationInput {
    background-position: 100% 0;
  }
`
export const Button = styled.button`
  && {
    vertical-align: middle;
    color: inherit;
    outline: none;
    background: none;
    margin: 0;
    border: none;
    padding: 0;
    width: 2rem;
    height: 2rem;
    line-height: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2%;
    ${SearchIcon} {
      svg {
        color: #050505;
        stroke: #050505;
        fill: currentColor;
      }
    }
  }
`
export const DataResult = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 44px;
  border: 1px px solid #ddd;
  margin-top: 5px;
  max-height: 400px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: auto;
  z-index: 999;
  overflow-y: auto;
  &:-webkit-scrollbar {
    display: none;
  }
`
export const DataItem = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  :hover {
    background-color: #eeeeee;
  }

  &.dataItem {
    background-color: #eeeeee;
    color: #06c;
  }
`
export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`
export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`

// responsive
export const Responsive = styled.div``
