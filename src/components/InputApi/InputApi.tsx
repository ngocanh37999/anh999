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

    2000
  )

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const searchWord = e.target.value

    setSearchInput(debounced(searchWord))

    searchWord === '' ? setResultSearch([]) : setResultSearch(resultSearch)
  }

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const _value = searchInput.trim()
    if (_value !== '') {
      navigate(path.home + `?name=${searchInput}`)
    }
    setSearchInput('')
    // sau khi nhấn enter thì reset lại cái input. Dùng:  event.target.reset() hoặc setSearchValue('')
    setResultSearch([])
  }

  const keyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

  const [animationInput, setAnimationInput] = useState(false)
  const toggleVisible = () => {
    setAnimationInput(visible => !visible)
  }

  return (
    <S.Responsive style={{ display: 'flex', flex: '1', padding: '0 4px' }}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <S.Search onClick={handleClick}>
          <S.Form onSubmit={search}>
            <S.InputWrapper>
              <S.InputGroupInput
                type="text"
                defaultValue={searchInput}
                onChange={handleChangeSearch}
                onKeyDown={e => keyboardNavigation(e)}
                autoComplete="off"
                className={animationInput ? 'animationInput' : ''}
                placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
              />

              <S.Button type="submit">
                <SearchIcon />
              </S.Button>

              {open && resultSearch.length !== 0 && (
                <S.DataResult>
                  {resultSearch.slice(0, 8).map((product, idx) => {
                    return (
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
                    )
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
