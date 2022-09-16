import {
  RatingStarPercent,
  RatingStarWrapper
} from 'src/components/ProductRating/productRating.style'
import styled from 'styled-components'

type ButtonProps = {
  light: any
}
export const ProductBriefing = styled.div`
  /* display: flex;
  background: #fff; */
`
export const ProductImages = styled.div`
  width: 480px;
  padding: 1.5rem;
`
export const ProductImageActive = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`
export const ProductImageSlider = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`
const ProductIconButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 4rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`
export const ProductIconButtonPrev = styled(ProductIconButton)`
  left: 0;
`
// export const ProductImage = styled.div`
//   padding: 0.5rem;
//   height: 92px;
//   width: 92px;
//   flex-shrink: 0;
//   padding: 2px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   img {
//     max-width: 100%;
//     max-height: 100%;
//     border: 2px solid ${({ active }) => (active ? '#ee4d2d' : 'transparent')};
//   }
// `
export const ProductIconButtonNext = styled(ProductIconButton)`
  right: 0;
`
export const ProductMeta = styled.div`
  flex: 1;
  padding: 1.5rem;
`
export const ProductTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`
export const ProductMeta1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
const ProductMeta1Item = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right: 1px solid rgba(0, 0, 0, 0.14);
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: 0;
  }
`
export const ProductRating = styled(ProductMeta1Item)`
  span {
    color: #ee4d2d;
    border-bottom: 1px solid #ee4d2d;
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }
  ${RatingStarWrapper} svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  ${RatingStarPercent} svg {
    color: #ee4d2d;
    fill: #ee4d2d;
  }
`
export const ProductSold = styled(ProductMeta1Item)`
  span:first-child {
    font-size: 1.6rem;
    color: #222;
    margin-right: 5px;
    padding-bottom: 1px;
  }
  span:last-child {
    font-size: 1.4rem;
    color: #767676;
    text-transform: capitalize;
  }
`
export const ProductPrice = styled.div`
  padding: 1.5rem 2rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`
export const ProductPriceOriginal = styled.div`
  font-size: 1.6rem;
  text-decoration: line-through;
  color: #929292;
  margin-right: 10px;
`
export const ProductPriceSale = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: #ee4d2d;
`
export const ProductPriceSalePercent = styled.div`
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  background: #ee4d2d;
  border-radius: 2px;
  padding: 2px 4px;
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
  white-space: nowrap;
`
export const ProductBuyQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const ProductBuyQuantityTitle = styled.div`
  color: #757575;
  text-transform: capitalize;
  flex: 0 0 110px;
  max-width: 110px;
`
export const ProductBuyQuantityController = styled.div`
  margin-right: 1.2rem;
`
export const ProductBuyQuantityQuantity = styled.div``

export const ProductContent = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.2rem;
  overflow: hidden;
  background: #fff;
  margin-top: 3rem;
  padding: 2rem;
`
export const ProductContentHeading = styled.div`
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.8rem;
  padding: 1.4rem;
  text-transform: capitalize;
`
export const ProductContentDetail = styled.div`
  margin: 3rem 1.5rem 1.5rem;
  font-size: 1.4rem;
  line-height: 2.2;
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
export const SliderContainer = styled.div`
  width: 480px;
  height: 450px;
  /* width: 100%; */
  /* width: 90rem; */
  /* height: 20rem; */
  margin: auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`
export const SliderContainerMobile = styled.div`
  /* width: 480px; */
  height: 500px;
  width: 100%;
  /* width: 90rem; */
  /* height: 20rem; */
  margin: auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: 1.5rem;
  &.containerMobile {
    height: auto;
    width: 100%;
    /* width: 90rem; */
    /* height: 20rem; */
    margin: auto;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding: 1.5rem;
  }
`
export const SliderContent = styled.section`
  width: 100%;
  height: 100%;
`
export const Slides = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &.active {
    display: inline-block;
  }
  &.inactive {
    display: none;
  }
`
export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`
export const SlideTitle = styled.h2``
export const SlideText = styled.h3``

export const Arrows = styled.div`
  /* position: relative; */
`
export const Prev = styled.span`
  width: auto;
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 100;
  padding: 1rem;
  margin-top: -3rem;
  font-size: 30px;
  font-weight: bold;
  border-radius: 0px 5px 5px 0px;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease-in;
  }
`
export const Next = styled.span`
  width: auto;
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  z-index: 100;
  padding: 1rem;
  margin-top: -3rem;
  font-size: 30px;
  font-weight: bold;
  border-radius: 5px 0px 0px 5px;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease-in;
  }
`

export const AllDots = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 85%;
  justify-content: center;
  z-index: 200;
`
export const Dot = styled.span`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  margin: 0px 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.activedot {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const ProductButtonsOne = styled.button`
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

  background: rgba(255, 87, 34, 0.1);
  border: 1px solid #ee4d2d;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  color: #ee4d2d;
  margin-right: 15px;
  padding: 0 4.2rem;
  font-size: 14px;
  height: 48px;
  /* svg {
    margin-right: 10px;
    color: #ee4d2d;
    stroke: #ee4d2d;
    width: 2rem;
    height: 2rem;
  } */
  &:hover {
    background: rgba(255, 87, 34, 0.15);
  }
`
