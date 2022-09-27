import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartDetailHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  overflow: hidden;
  border-radius: 3px;
  height: 5.5rem;
  font-size: 1.4rem;
  background: #fff;
  text-transform: capitalize;
  margin-bottom: 12px;
  color: #888;
  padding: 0 20px;
`

export const CartDetailHeaderName = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
  color: rgba(0, 0, 0, 0.8);
`

export const CartDetailHeaderUnitPrice = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartDetailHeaderAction = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartDetailSection = styled.div`
  padding: 1rem;
`

export const MiniProductCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  overflow: hidden;
  border-radius: 3px;
  height: 5.5rem;
  font-size: 1.4rem;
  background: #fff;
  text-transform: capitalize;
  margin-bottom: 12px;
  color: #888;
  padding: 0 20px;
`
export const MiniProductCartImg = styled.img`
  /* flex-shrink: 1; */
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`
export const MiniProductCartTitle = styled.div`
  /* flex-grow: 1; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`
export const MiniProductCartPrice = styled.div`
  margin-left: 4rem;
  flex-shrink: 1;
  color: #ee4d2d;
`
export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const MoreProduct = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
`
export const ButtonShowCart = styled(Link)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  &:hover {
    background: #f05d40;
  }
`
export const CartRemove = styled.div`
  cursor: pointer;
  padding-left: 1rem;
`

export const BuyPurchases = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  &:hover {
    background: #f05d40;
  }
  text-transform: capitalize;
  height: 4rem;
  font-size: 1.4rem;
  width: 10rem;
  font-weight: 300;
  margin: 0 2rem;
`
