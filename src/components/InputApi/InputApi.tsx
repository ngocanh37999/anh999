import { useEffect, useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
// import result from 'src/utils/helperUpdateOne'
// import SearchIcon from '../svg/SearchIcon/SearchIcon'
// import Typed from 'react-typed'
// import { TypeAnimation } from 'react-type-animation'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { useMediaQuery } from 'react-responsive'
import { useDebouncedCallback } from 'use-debounce'
// import useInterval from 'src/hooks/useInterval'
import * as S from './inputApi.style'
import { useDispatch } from 'react-redux'
// import { getProductsSearch } from 'src/slice/product.slice'
import { unwrapResult } from '@reduxjs/toolkit'
// import SearchIcon from 'src/components/svg/SearchIcon/SearchIcon'
import { getProductsSearch } from 'src/slice/product/product.slice'
import SearchIcon from 'src/components/svg/SearchIcon/SearchIcon'
import { generateNameId } from 'src/utils/helper'
import { IconButton } from '@material-ui/core'
import { AiOutlineSearch } from 'react-icons/ai'

type Product = {
  _id: string
  name: string
  image: string
}[]

export default function InputApi() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [resultSearch, setResultSearch] = useState<Product>([])
  const [searchInput, setSearchInput] = useState('')
  const [, startTransition] = useTransition()
  const [cursor, setCursor] = useState(-1)
  const [open, setOpen] = useState(false)

  // Khi click vào sẽ hiện ra
  const handleClick = () => {
    setOpen(prev => !prev)
  }
  const handleClickAway = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!searchInput) {
      return
    }
    const params = {
      name: `${searchInput}`
    }
    const _getProducts = async () => {
      const res = await dispatch(getProductsSearch({ params })).then(
        unwrapResult
      )
      setResultSearch(res.data.products)
    }
    _getProducts()
  }, [dispatch, searchInput])
  const debounced: any = useDebouncedCallback(
    // function
    value => {
      setSearchInput(value)
    },
    // delay in ms
    2000
    // { maxWait: 2000 }
  )

  const handleChangeSearch = (e: any) => {
    e.preventDefault()
    const searchWord = e.target.value

    setSearchInput(debounced(searchWord))

    searchWord === '' ? setResultSearch([]) : setResultSearch(resultSearch)
  }

  const search = (event: any) => {
    event.preventDefault()
    const _value = searchInput.trim()
    if (_value !== '') {
      navigate(path.home + `?name=${searchInput}`)
    }
    setSearchInput('')
    // sau khi nhấn enter thì reset lại cái input. Dùng:  event.target.reset() hoặc setSearchValue('')
    setResultSearch([])
  }

  const keyboardNavigation = (e: any) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()

      setCursor(c => (c < resultSearch.slice(0, 8).length - 1 ? c + 1 : 0))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor(c => (c > 0 ? c - 1 : resultSearch.slice(0, 8).length - 1))
    }

    if (
      (e.key === 'Enter' && cursor > 0) ||
      (e.key === 'Enter' && cursor === 0)
    ) {
      const _value = searchInput.trim()
      if (_value !== '') {
        navigate(path.product + `/${generateNameId(resultSearch[cursor])}`)
      }
      setSearchInput('')
      setResultSearch([])
    }
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const [animationInput, setAnimationInput] = useState(false)
  const toggleVisible = () => {
    setAnimationInput(visible => !visible)
  }
  // useInterval(() => {
  //   toggleVisible()
  // }, 2000)

  console.log(resultSearch)
  return (
    <S.Responsive style={{ display: 'flex', flex: '1', padding: '0 4px' }}>
      {/* <IconButton>
        <AiOutlineSearch fontSize="large" className="icon" />
      </IconButton> */}

      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <S.Search onClick={handleClick}>
          <S.Form onSubmit={search}>
            <S.InputWrapper>
              {/* <Typed
                  strings={['Bạn muốn tìm gì?', 'Đồng hồ', 'Điện thoại']}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                > */}
              <S.InputGroupInput
                type="text"
                defaultValue={searchInput}
                onChange={handleChangeSearch}
                onKeyDown={e => keyboardNavigation(e)}
                autoComplete="off"
                className={animationInput ? 'animationInput' : ''}
                placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
              />
              {/* </Typed> */}
              <S.Button type="submit">
                <SearchIcon />
              </S.Button>
              {/* {isPending && <p>Update list...</p>} */}
              {open && resultSearch.length !== 0 && (
                <S.DataResult>
                  {resultSearch.slice(0, 8).map((product, idx) => {
                    /////////////// Cách 1:
                    return (
                      // <Link
                      //   to={path.product + `/${generateNameId(product)}`}
                      //   key={product._id}
                      // >
                      <S.DataItem
                        to={path.product + `/${generateNameId(product)}`}
                        className={cursor === idx ? 'dataItem' : ''}
                        key={product._id}
                      >
                        <S.MiniProductCartImg src={product.image} alt="" />
                        <S.MiniProductCartTitle>
                          {product.name}
                        </S.MiniProductCartTitle>
                      </S.DataItem>
                      // </Link>
                    )

                    /////////////// Cách 2: hightlight
                    // const index = product.name.indexOf(searchInput)
                    // return (
                    //   <Link
                    //     to={path.product + `/${method.generateNameId(product)}`}
                    //     key={product._id}
                    //   >
                    //     <S.DataItem
                    //       to={
                    //         path.product + `/${method.generateNameId(product)}`
                    //       }
                    //       groupItem={true ? cursor === idx : false}
                    //     >
                    //       <S.MiniProductCartImg src={product.image} alt="" />
                    //       <S.MiniProductCartTitle>
                    //         {index === -1 ? (
                    //           <p>{product.name}</p>
                    //         ) : (
                    //           <p>
                    //             {product.name.slice(0, index)}
                    //             <span style={{ backgroundColor: 'yellow' }}>
                    //               {product.name.slice(
                    //                 index,
                    //                 index + searchInput.length
                    //               )}
                    //             </span>
                    //             {product.name.slice(index + searchInput.length)}
                    //           </p>
                    //         )}
                    //         {/* {product.name} */}
                    //       </S.MiniProductCartTitle>
                    //     </S.DataItem>
                    //   </Link>
                    // )

                    //
                  })}
                </S.DataResult>
              )}
            </S.InputWrapper>
          </S.Form>
        </S.Search>
      </ClickAwayListener>
    </S.Responsive>
  )
}
