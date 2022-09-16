import { Link } from 'react-router-dom'
// import { ButtonLink } from 'src/utils/utils'
import styled from 'styled-components'

type Light = {
  light?: number | string
}
export const CartFooterCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 20px;
  min-width: 58px;
`
export const ButtonResult = styled.button<Light>`
  display: flex;
  align-items: center;
  padding: 0 12px 0 20px;
  min-width: 58px;
  /*  */
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
  ${({ light }) => {
    if (light) {
      return `
      background: #fff;
      color: #555;
      border: 1px solid rgba(0,0,0,.09);
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
      &:hover {
        background: rgba(0,0,0,.02);
      }
      `
    }
  }}
`
//
export const ProductHeaderCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 20px;
  min-width: 58px;
`
export const ProductHeaderName = styled.div`
  width: 45%;
  color: rgba(0, 0, 0, 0.8);
`

export const ProductSection = styled.div`
  padding: 20px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 3px;
  background: #fff;
  margin-bottom: 2.5rem;
`
export const CartItem = styled.div`
  margin-bottom: 2.2rem;
  padding: 2rem 0;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
`
export const CartItemCheckbox = styled(ProductHeaderCheckbox)``
export const CartItemOverview = styled(ProductHeaderName)`
  display: flex;
`
export const CartItemOverviewImage = styled(Link)`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
export const CartItemOverviewNameWrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  padding: 0.5rem 2rem 0 1rem;
`
export const CartItemOverviewName = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.3125rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
