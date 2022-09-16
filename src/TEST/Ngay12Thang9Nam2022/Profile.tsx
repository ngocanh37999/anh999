import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/slice/profile/profile.slice'
import { RootState } from 'src/store'

export default function Profile() {
  const profile = useSelector((state: RootState) => state.profile.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    const _getUser = async () => {
      await dispatch(getUser()).then(unwrapResult)
    }
    _getUser()
  }, [dispatch])

  // console.log(profile)

  return (
    <div>
      Profile
      <div>Tên: {profile.name} </div>
      <div>Tuổi: {profile.age} </div>
    </div>
  )
}
