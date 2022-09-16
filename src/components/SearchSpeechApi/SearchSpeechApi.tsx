import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import { useState } from 'react'
import { path } from 'src/constants/path'
import useInterval from 'src/hooks/useInterval'
import { MdOutlineSettingsVoice } from 'react-icons/md'
import { IconButton } from '@material-ui/core'
import { getProductsSearch } from 'src/slice/product/product.slice'
export default function SearchSpeechApi() {
  const { transcript } = useSpeechRecognition()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  type productApiProps = {
    _id: string
  }[]
  const [resultSearch, setResultSearch] = useState<productApiProps>([])
  useEffect(() => {
    if (!transcript) {
      return
    }
    const params = {
      name: `${transcript}`
    }
    const _getProducts = async () => {
      const res = await dispatch(getProductsSearch({ params })).then(
        unwrapResult
      )
      setResultSearch(res.data.products)
    }
    _getProducts()
  }, [dispatch, transcript])
  const handleClickListen = () => {
    navigate(path.home + `?name=${transcript}`)
  }
  useInterval(() => {
    if (transcript) {
      handleClickListen()
    }
  }, 2000)
  return (
    <>
      <IconButton onClick={SpeechRecognition.startListening}>
        <MdOutlineSettingsVoice fontSize="large" className="icon" />
        <div style={{ display: 'none' }}>
          {resultSearch &&
            resultSearch.map(product => {
              return (
                <div
                  key={product?._id}
                  style={{ display: 'none' }}
                  onClick={handleClickListen}
                />
              )
            })}
        </div>
      </IconButton>
    </>
  )
}
