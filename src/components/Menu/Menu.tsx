import { useState } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import * as S from './menu.style'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { Link, useLocation } from 'react-router-dom'
import { path } from 'src/constants/path'
import qs from 'query-string'
import { getCategories } from 'src/slice/category/category.slice'

type Categories = {
  _id: string
  name: string
}[]

export default function Menu() {
  const location = useLocation()
  const [categories, setCategories] = useState<Categories>([])
  const dispatch = useDispatch()
  useEffect(() => {
    const _getCategories = async () => {
      const res = await dispatch(getCategories()).then(unwrapResult)
      setCategories(res.data)
    }
    _getCategories()
  }, [dispatch])
  // -----------------
  const [open, setOpen] = useState(false)
  //// Cách 1: Khi click vào sẽ hiện ra
  const handleClick = () => {
    setOpen(prev => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const handleActiveClassCategoryItem = (category: any) => {
    const query = qs.parse(location.search)
    return query.category === category._id ? 'active' : ''
  }

  return (
    <div>
      <S.Menu>
        <S.Container>
          {/*  */}
          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
          >
            <S.ContainerOne onClick={handleClick}>
              <S.MenuIcon>
                <S.ContainerTwo open={open}>
                  <span />
                  <span />
                  <span />
                </S.ContainerTwo>
                {/* <S.DanhMuc>DANH MỤC</S.DanhMuc> */}
              </S.MenuIcon>
              <S.Wrapper>
                <S.Arrow open={open} />
                <S.DropDown open={open}>
                  {categories.map(category => (
                    <S.CategoryItem key={category._id}>
                      <Link
                        to={path.home + `?category=${category._id}`}
                        className={handleActiveClassCategoryItem(category)}
                      >
                        {category.name}
                      </Link>
                    </S.CategoryItem>
                  ))}
                </S.DropDown>
              </S.Wrapper>
            </S.ContainerOne>
          </ClickAwayListener>
        </S.Container>
      </S.Menu>
    </div>
  )
}
