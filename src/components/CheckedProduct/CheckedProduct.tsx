import { createNextState } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import Checkbox from 'src/components/Checkbox/Checkbox'
// import { getProducts } from 'src/slice/product.slice'
import keyBy from 'lodash/keyBy'
import * as S from './checkedProduct.style'
import { path } from 'src/constants/path'

type CheckedProductProps = {
  _id: string
  ArrayApi: {
    checked: boolean
    _id: string
    image: string
    name: string
  }[]
}
export default function CheckedProduct({ ArrayApi }: CheckedProductProps) {
  // Bước 2: Biến cái products thành cái state của coponent để thêm vào checked
  // type LocalProducts = {
  //   checked: boolean
  // }
  const [localProducts, setLocalProducts] = useState(() =>
    createNextState(ArrayApi, draft => {
      draft.forEach(product => {
        product.checked = false
      })
    })
  )
  // console.log(localProducts)

  // Bước 3: Dùng useEffect để cập nhật lại cái localProducts. Bởi vì ban đầu products nó rỗng, sau rồi cập nhật Api, products nó có giá trị thì mình phải cập nhật cái localProducts này
  useEffect(() => {
    setLocalProducts(localProducts => {
      const localProductsObject = keyBy(localProducts, '_id')
      return createNextState(ArrayApi, draft => {
        draft.forEach(product => {
          product.checked = Boolean(localProductsObject[product._id]?.checked)
        })
      })
    })
  }, [ArrayApi])

  // Bước 4:
  const isCheckedAll = localProducts.every(product => product.checked)
  // totalCheckedProducts: lọc ra những product nào đã được check
  const checkedProducts = localProducts.filter(product => product.checked)
  // totalCheckedProducts: tính bao nhiêu product đã đươc check để mình điền vào chỗ này....
  const totalCheckedProducts = checkedProducts.length

  // Bước 5: Check từng cái item (khi mình check vào một cái item thì mình biết được cái index và product. Và từ cái index đó mình sẽ sửa lại cái checked tùy thuộc vào cái checkbox nó truyền ra cho mình false hay true)
  // Tạo hàm và truyền xuống component Checkbox trong CartItemCheckbox
  const handleCheck = (indexProduct: number) => (value: boolean) => {
    setLocalProducts(localProducts =>
      createNextState(localProducts, draft => {
        draft[indexProduct].checked = value
      })
    )
  }

  // Bước 6: Mình dùng biến isCheckedAll(phương thức every) để kiểm tra  thử tất cả các product có được check hay không. Nếu tất cả product được checked thì isCheckedAll là true, còn chỉ cần có một cái chưa được checked thì isCheckedAll là false
  // Tóm lại check tất cả thì "isCheckedAll" là true, chỉ cần có một cái chưa được check thì "isCheckedAll" là false
  // Nếu như mà tất cả đã được check thì mình sẽ cho tất cả là true, còn chỉ cần có một cái nó không được check thì mình sẽ cho là false
  const handleCheckAll = () => {
    if (isCheckedAll) {
      setLocalProducts(localProducts =>
        createNextState(localProducts, draft => {
          draft.forEach(product => {
            product.checked = false
          })
        })
      )
    } else {
      setLocalProducts(localProducts =>
        createNextState(localProducts, draft => {
          draft.forEach(product => {
            product.checked = true
          })
        })
      )
    }
  }
  return (
    <div>
      <S.CartFooterCheckbox>
        <Checkbox onChange={handleCheckAll} checked={isCheckedAll} />
        {/* <CheckboxLink onChange={handleCheckAll} checked={isCheckedAll} /> */}
      </S.CartFooterCheckbox>
      <S.ButtonResult>Xem {totalCheckedProducts} kết quả </S.ButtonResult>

      <S.ProductSection>
        {totalCheckedProducts > 0 &&
          localProducts.map((product, index) => (
            <S.CartItem key={product._id}>
              <S.CartItemCheckbox>
                {/* <Checkbox
                checked={product.checked}
                onChange={handleCheck(index)}
              /> */}
              </S.CartItemCheckbox>
              <S.CartItemOverview>
                <S.CartItemOverviewImage to="">
                  <img src={product.image} alt="" />
                </S.CartItemOverviewImage>
                <S.CartItemOverviewNameWrapper>
                  <S.CartItemOverviewName to="">
                    {product.name}
                  </S.CartItemOverviewName>
                </S.CartItemOverviewNameWrapper>
              </S.CartItemOverview>
            </S.CartItem>
          ))}
      </S.ProductSection>
    </div>
  )
}
