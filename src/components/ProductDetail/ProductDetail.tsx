import { unwrapResult } from '@reduxjs/toolkit'
import DOMPurify from 'dompurify'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating/ProductRating'
import usePopover from 'src/hooks/usePopover'
// import { getProductDetail } from 'src/slice/productDetail.slice'
import {
  formatK,
  formatMoney,
  getIdFromNameId,
  rateSale
} from 'src/utils/helper'
import SvgNext from 'src/components/svg/SvgNext/SvgNext'
import SvgPrevious from 'src/components/svg/SvgPrevious/SvgPrevious'
import * as S from './productDetail.style'

import { useMediaQuery } from 'react-responsive'

// import Slider from './Slider/Slider'
import { getProductDetail } from 'src/slice/product/productDetail.slice'
import Slider from './Slider/Slider'

type Product = {
  images: []
  name: string
  rating: number
  price: number
  price_before_discount: number
  description: string
  sold: number
}

export default function ProductDetail() {
  const { idProduct } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const realId = getIdFromNameId(idProduct)
    // console.log(realId)

    const _getProductsDetail = async () => {
      const res = await dispatch(getProductDetail(realId)).then(unwrapResult)
      setProduct(res.data)
    }
    _getProductsDetail()

    // dispatch(getProductDetail(realId))
    //   .then(unwrapResult)
    //   .then(res => {
    //     // res.data.images = res.data.images.map((image, index) => {
    //     //   return {
    //     //     url: image,
    //     //     id: index
    //     //   }
    //     // })
    //     setProduct(res.data)
    //   })
  }, [idProduct, dispatch])
  // console.log(product)
  // console.log(imageSlider)

  type imgSlider = {
    images: any[]
  }[]
  const imageSlider = useMemo<imgSlider>(() => {
    if (product) {
      return product.images
    }
    return []
  }, [product])
  // console.log(imageSlider)

  //
  const [activeIndex, setActiveIndex] = useState(0)
  // const { activePopover, showPopover, hidePopover } = usePopover()
  // const imageSlider = imageApi
  const len = imageSlider.length - 1
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 5000)
    return () => clearTimeout(interval)
  }, [activeIndex, len])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      {product && (
        <div>
          {isTabletOrMobile && (
            <div>
              <S.ProductBriefing>
                {/* <S.ProductImages>
            <S.ProductImageActive>
              <img src={currentImage.url} alt="" />
            </S.ProductImageActive>
            <S.ProductImageSlider>
              <S.ProductIconButtonPrev onClick={choosePrev}>
                <svg
                  enableBackground="new 0 0 13 20"
                  viewBox="0 0 13 20"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-left-bold"
                >
                  <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                </svg>
              </S.ProductIconButtonPrev>
              {currentImages.map(image => (
                <S.ProductImage
                  key={image.id}
                  onMouseEnter={() => chooseCurrent(image)}
                  active={currentImage.id === image.id}
                >
                  <img src={image.url} alt="" />
                </S.ProductImage>
              ))}
              <S.ProductIconButtonNext onClick={chooseNext}>
                <svg
                  enableBackground="new 0 0 13 21"
                  viewBox="0 0 13 21"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-right-bold"
                >
                  <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                </svg>
              </S.ProductIconButtonNext>
            </S.ProductImageSlider>
          </S.ProductImages> */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div style={{ padding: '1.5rem' }}>
                  <S.ProductTitle>{product.name}</S.ProductTitle>
                  <S.ProductMeta1>
                    <S.ProductRating>
                      <span>{product.rating}</span>
                      <ProductRating rating={product.rating} />
                    </S.ProductRating>
                    <S.ProductSold>
                      <span>{formatK(product.sold)}</span>
                      <span>Đã bán</span>
                    </S.ProductSold>
                  </S.ProductMeta1>
                </div>

                <div>
                  <S.SliderContainerMobile className="containerMobile">
                    <Slider productImages={imageSlider} />
                  </S.SliderContainerMobile>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <S.ProductMeta>
                    {/* <S.ProductTitle>{product.name}</S.ProductTitle> */}
                    {/* <S.ProductMeta1>
              <S.ProductRating>
                <span>{product.rating}</span>
                <ProductRating rating={product.rating} />
              </S.ProductRating>
              <S.ProductSold>
                <span>{method.formatK(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductSold>
            </S.ProductMeta1> */}
                    <S.ProductPrice>
                      <S.ProductPriceOriginal>
                        đ{formatMoney(product.price_before_discount)}
                      </S.ProductPriceOriginal>
                      <S.ProductPriceSale>
                        đ{formatMoney(product.price)}
                      </S.ProductPriceSale>
                      <S.ProductPriceSalePercent>
                        {rateSale(product.price_before_discount, product.price)}{' '}
                        giảm
                      </S.ProductPriceSalePercent>
                    </S.ProductPrice>

                    <S.ProductButtonsOne>Mua </S.ProductButtonsOne>
                  </S.ProductMeta>
                </div>

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
              </S.ProductBriefing>
              <S.ProductContent>
                <S.ProductContentHeading>
                  MÔ TẢ SẢN PHẨM
                </S.ProductContentHeading>
                <S.ProductContentDetail
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description)
                  }}
                />
              </S.ProductContent>
            </div>
          )}
        </div>
      )}
      {product && (
        <div>
          {isDesktopOrLaptop && (
            <div>
              <S.ProductBriefing>
                {/*  */}
                {/*  */}
                {/*  */}
                <div style={{ padding: '1.5rem' }}>
                  <S.ProductTitle>{product.name}</S.ProductTitle>
                  <S.ProductMeta1>
                    <S.ProductRating>
                      <span>{product.rating}</span>
                      <ProductRating rating={product.rating} />
                    </S.ProductRating>
                    <S.ProductSold>
                      <span>{formatK(product.sold)}</span>
                      <span>Đã bán</span>
                    </S.ProductSold>
                  </S.ProductMeta1>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}
                >
                  <S.SliderContainerMobile
                    style={{
                      flex: '0 0 490px'
                    }}
                  >
                    <Slider productImages={imageSlider} />
                  </S.SliderContainerMobile>
                  {/*  */}
                  <S.ProductMeta
                    style={{
                      flex: '1'
                    }}
                  >
                    <S.ProductPrice>
                      <S.ProductPriceOriginal>
                        đ{formatMoney(product.price_before_discount)}
                      </S.ProductPriceOriginal>
                      <S.ProductPriceSale>
                        đ{formatMoney(product.price)}
                      </S.ProductPriceSale>
                      <S.ProductPriceSalePercent>
                        {rateSale(product.price_before_discount, product.price)}{' '}
                        giảm
                      </S.ProductPriceSalePercent>
                    </S.ProductPrice>
                    <S.ProductButtonsOne>Mua </S.ProductButtonsOne>
                  </S.ProductMeta>
                </div>
              </S.ProductBriefing>
              <S.ProductContent>
                <S.ProductContentHeading>
                  MÔ TẢ SẢN PHẨM
                </S.ProductContentHeading>
                <S.ProductContentDetail
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description)
                  }}
                />
              </S.ProductContent>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
