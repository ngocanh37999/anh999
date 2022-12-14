import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating/ProductRating'
import Desktop from 'src/components/Responsive/Desktop'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'
import { path } from 'src/constants/path'
import { formatK, formatMoney, generateNameId } from 'src/utils/helper'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import * as S from './productItem.style'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { addToCart, getCartPurchases } from 'src/slice/cart/cart.slice'

type Product = {
  products: {
    _id: string
    // _id?: string
    view: number
    updatedAt: string
    createdAt: string
    sold: number
    rating: number
    quantity: number
    price_before_discount: number
    price: number
    name: string
    // images: {}[]
    images: []
    image: string
    category: {
      name: string
      _id: string
    }
  }[]
}

export default function ProductItem({ products }: Product) {
  const dispatch = useDispatch()
  const handleAdd = async product => {
    const body = {
      product_id: product._id,
      buy_count: 1
    }
    await dispatch(addToCart(body)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
  }
  return (
    <div>
      <Mobile>
        <S.Animate>
          <S.ProductListTabletOrMobile layout>
            {products.map(product => (
              <S.ProductTabletOrMobile
                key={product._id}
                // className={isTabletOrMobile === true ? 'isTabletOrMobile' : false}
                // className={handleResponsive(isTabletOrMobile, isDesktopOrLaptop)}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <S.ProductItem>
                  <S.ProductItemWrapper>
                    <S.Content>
                      <Link to={path.product + `/${generateNameId(product)}`}>
                        <S.ProductItemImage>
                          <img src={product.image} alt={product.name} />
                        </S.ProductItemImage>
                      </Link>

                      <S.ProductItemInfo>
                        <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
                        <S.ProductItemPrice>
                          <S.ProductItemPriceOriginal>
                            ??{formatMoney(product.price_before_discount)}
                          </S.ProductItemPriceOriginal>
                          <S.ProductItemPriceSale>
                            ??{formatMoney(product.price)}
                          </S.ProductItemPriceSale>
                        </S.ProductItemPrice>

                        <S.ProductItemMeta>
                          <S.Productcart onClick={() => handleAdd(product)}>
                            <AiOutlineShoppingCart />
                          </S.Productcart>
                          <S.ProductRatingContainer
                            style={{ paddingLeft: '2rem' }}
                          >
                            <ProductRating rating={product.rating} />
                          </S.ProductRatingContainer>
                          <S.ProductItemSold>
                            <span>{formatK(product.sold)}</span>
                            <span>???? b??n</span>
                          </S.ProductItemSold>
                        </S.ProductItemMeta>
                      </S.ProductItemInfo>
                    </S.Content>
                  </S.ProductItemWrapper>
                </S.ProductItem>
              </S.ProductTabletOrMobile>
            ))}
          </S.ProductListTabletOrMobile>
        </S.Animate>
      </Mobile>

      <Tablet>
        <S.Animate>
          <S.ProductListTabletOrMobile layout>
            {products.map(product => (
              <S.ProductTabletOrMobile
                key={product._id}
                // className={isTabletOrMobile === true ? 'isTabletOrMobile' : false}
                // className={handleResponsive(isTabletOrMobile, isDesktopOrLaptop)}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <S.ProductItem>
                  <S.ProductItemWrapper>
                    <S.Content>
                      <Link to={path.product + `/${generateNameId(product)}`}>
                        <S.ProductItemImage>
                          <img src={product.image} alt={product.name} />
                        </S.ProductItemImage>
                      </Link>

                      <S.ProductItemInfo>
                        <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
                        <S.ProductItemPrice>
                          <S.ProductItemPriceOriginal>
                            ??{formatMoney(product.price_before_discount)}
                          </S.ProductItemPriceOriginal>
                          <S.ProductItemPriceSale>
                            ??{formatMoney(product.price)}
                          </S.ProductItemPriceSale>
                        </S.ProductItemPrice>

                        <S.ProductItemMeta>
                          <S.Productcart onClick={() => handleAdd(product)}>
                            <AiOutlineShoppingCart />
                          </S.Productcart>
                          <S.ProductRatingContainer
                            style={{ paddingLeft: '2rem' }}
                          >
                            <ProductRating rating={product.rating} />
                          </S.ProductRatingContainer>
                          <S.ProductItemSold>
                            <span>{formatK(product.sold)}</span>
                            <span>???? b??n</span>
                          </S.ProductItemSold>
                        </S.ProductItemMeta>
                      </S.ProductItemInfo>
                    </S.Content>
                  </S.ProductItemWrapper>
                </S.ProductItem>
              </S.ProductTabletOrMobile>
            ))}
          </S.ProductListTabletOrMobile>
        </S.Animate>
      </Tablet>

      <Desktop>
        <S.Animate>
          <S.ProductListTabletOrMobile layout>
            {products.map(product => (
              <S.ProductListDesktop
                key={product._id}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <S.ProductItem>
                  <S.ProductItemWrapper>
                    <S.Content>
                      <Link to={path.product + `/${generateNameId(product)}`}>
                        <S.ProductItemImage>
                          <img src={product.image} alt={product.name} />
                        </S.ProductItemImage>
                      </Link>

                      <S.ProductItemInfo>
                        <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
                        <S.ProductItemPrice>
                          <S.ProductItemPriceOriginal>
                            ??{formatMoney(product.price_before_discount)}
                          </S.ProductItemPriceOriginal>
                          <S.ProductItemPriceSale>
                            ??{formatMoney(product.price)}
                          </S.ProductItemPriceSale>
                        </S.ProductItemPrice>

                        <S.ProductItemMeta>
                          <S.Productcart onClick={() => handleAdd(product)}>
                            <AiOutlineShoppingCart />
                          </S.Productcart>
                          <S.ProductRatingContainer
                            style={{ paddingLeft: '2rem' }}
                          >
                            <ProductRating rating={product.rating} />
                          </S.ProductRatingContainer>
                          <S.ProductItemSold>
                            <span>{formatK(product.sold)}</span>
                            <span>???? b??n</span>
                          </S.ProductItemSold>
                        </S.ProductItemMeta>
                      </S.ProductItemInfo>
                    </S.Content>
                  </S.ProductItemWrapper>
                </S.ProductItem>
              </S.ProductListDesktop>
            ))}
          </S.ProductListTabletOrMobile>
        </S.Animate>
      </Desktop>
    </div>
  )
}
