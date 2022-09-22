import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deletePurchases, getCartPurchases } from 'src/slice/cart/cart.slice'
import { formatMoney } from 'src/utils/helper'
import { RiDeleteBin5Line } from 'react-icons/ri'
import * as S from './cartDetail.style'

type RootState = {
  cart: {
    purchases: {
      _id: string
      product: { image: string; name: string; price: number }
    }[]
  }
}
export default function CartDetail() {
  const dispatch = useDispatch()
  const purchases = useSelector((state: RootState) => state.cart.purchases)
  const handleRemove = indexPurchase => async () => {
    const purchase_id = purchases[indexPurchase]._id
    await dispatch(deletePurchases([purchase_id])).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
  }
  return (
    <div className="container">
      <S.CartDetailHeader>
        <S.CartDetailHeaderName>Sản phẩm</S.CartDetailHeaderName>
        <S.CartDetailHeaderUnitPrice>Giá</S.CartDetailHeaderUnitPrice>
        <S.CartDetailHeaderAction>Thao tác</S.CartDetailHeaderAction>
      </S.CartDetailHeader>

      <S.CartDetailSection>
        {purchases.map((purchase, index) => (
          <S.MiniProductCart key={purchase._id}>
            <S.CartDetailHeaderName
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <S.MiniProductCartImg src={purchase.product.image} />
              <S.MiniProductCartTitle>
                {purchase.product.name}
              </S.MiniProductCartTitle>
            </S.CartDetailHeaderName>

            <S.CartDetailHeaderUnitPrice>
              <S.MiniProductCartPrice>
                đ{formatMoney(purchase.product.price)}
              </S.MiniProductCartPrice>
            </S.CartDetailHeaderUnitPrice>

            <S.CartDetailHeaderAction>
              <S.CartRemove onClick={handleRemove(index)}>
                <RiDeleteBin5Line />
              </S.CartRemove>
            </S.CartDetailHeaderAction>
          </S.MiniProductCart>
        ))}
      </S.CartDetailSection>
    </div>
  )
}
