import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import usePopover from 'src/hooks/usePopover'
import useQuery from 'src/hooks/useQuery'
import { RootState } from 'src/store'
import { formatMoney } from 'src/utils/helper'
import Popover from '../Popover/Popover'
import * as S from './cart.style'
export default function Cart() {
  const { activePopover, hidePopover, showPopover } = usePopover()

  const purchases = useSelector((state: RootState) => state.cart.purchases)

  return (
    <div>
      <S.Cart onMouseEnter={showPopover} onMouseLeave={hidePopover}>
        <S.CartContainer>
          <S.CartIcon to="">
            <svg
              viewBox="0 0 26.6 25.6"
              className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
            >
              <polyline
                fill="none"
                points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
              />
              <circle cx="10.7" cy={23} r="2.2" stroke="none" />
              <circle cx="19.7" cy={23} r="2.2" stroke="none" />
            </svg>
            {purchases.length > 0 && (
              <S.CartNumberBadge>{purchases.length}</S.CartNumberBadge>
            )}
          </S.CartIcon>
          <Popover active={activePopover}>
            <S.PopoverContent>
              <S.PopoverTitle>Sản phẩm mới thêm</S.PopoverTitle>
              {/* {purchases.slice(0, 5).map(purchase => (
                <S.MiniProductCart key={purchase._id}>
                  <S.MiniProductCartImg src={purchase.product.image} />
                  <S.MiniProductCartTitle>
                    {purchase.product.name}
                  </S.MiniProductCartTitle>
                  <S.MiniProductCartPrice>
                    đ{formatMoney(purchase.product.price)}
                  </S.MiniProductCartPrice>
                </S.MiniProductCart>
              ))} */}

              <S.PopoverFooter>
                <S.MoreProduct>
                  {purchases.length > 5 && (
                    <span>{purchases.length - 5} sản phẩm vào giỏ</span>
                  )}
                </S.MoreProduct>
                {/* <S.ButtonShowCart to={path.cart}>Xem giỏ hàng</S.ButtonShowCart> */}
              </S.PopoverFooter>
            </S.PopoverContent>
          </Popover>
        </S.CartContainer>
      </S.Cart>
    </div>
  )
}