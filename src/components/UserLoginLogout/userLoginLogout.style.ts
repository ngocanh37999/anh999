import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  ${Drawer} {
    width: 15rem;
    top: 135%;
  }
`
export const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`
export const UserName = styled.div`
  padding-left: 5px;
  max-width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const UserLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
export const UserButton = styled.div`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;

  border: 0;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
