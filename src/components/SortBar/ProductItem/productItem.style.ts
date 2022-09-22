import styled, { css, keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const animate = keyframes`
  0%{background-position: 0% 50%;}
  50%{background-position: 100% 50%;}
  100%{background-position: 0% 50%;}
`

export const Animate = styled(AnimatePresence)``
export const ProductList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`

export const Product = styled(motion.div)`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  margin: 5px 0;
`

export const ProductItem = styled(motion.div)`
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0.1rem 0.25rem 0 rgb(0 0 0 / 10%);
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0 / 5%);
    transform: translateY(-0.0625rem);
  }
  position: relative;
`

export const ProductItemWrapper = styled.div`
  padding: 5px;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    z-index: -1;
    animation: ${animate} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`

export const Content = styled.div`
  background: #fff;
`

export const ProductItemImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    object-fit: contain;
    vertical-align: bottom;
  }
`

export const ProductItemInfo = styled.div`
  padding: 0.5rem;
`
export const ProductItemTitle = styled.div`
  display: inline-block;
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`
export const ProductItemPrice = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
`
export const ProductItemPriceOriginal = styled.div`
  flex-shrink: 1;
  max-width: 50%;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ProductItemPriceSale = styled.div`
  flex-grow: 1;
  color: #ee4d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    &:first-child {
      font-size: 1.2rem;
      color: #ee4d2d;
    }
    &:last-child {
      font-size: 1.6rem;
      color: #ee4d2d;
    }
  }
`
export const ProductItemMeta = styled.div`
  display: flex;
  justify-content: space-between;
`

// responsive
export const ProductListTabletOrMobile = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 5px;
  margin: 5px 0;
`
export const ProductTabletOrMobile = styled(motion.div)`
  padding: 0 5px;
  margin: 5px 0;

  flex: 0 0 50%;
  max-width: 50%;
`
export const ProductListDesktop = styled(motion.div)`
  padding: 0 5px;
  margin: 5px 0;

  flex: 0 0 20%;
  max-width: 20%;
`

export const Productcart = styled.div`
  cursor: pointer;
  /* flex: 0 0 10%;
  max-width: 10%; */
`
export const ProductRatingContainer = styled.div`
  /* flex: 0 0 50%;
  max-width: 50%;
  cursor: pointer; */
  align-items: center;
`
export const ProductItemSold = styled.div`
  /* flex: 0 0 40%;
  max-width: 40%; */
  color: rgba(0, 0, 0, 0.87);
  margin-left: 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span:first-child {
    margin-right: 3px;
  }
`
