import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { unauthorize } from 'src/slice/auth/auth.slice'
import { getCartPurchases } from 'src/slice/cart/cart.slice'
type RootState = {
  app: {
    status: number
  }
}
export default function Authorization() {
  const authenticated = useAuthenticated()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const status = useSelector((state: RootState) => state.app.status)

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      navigate(path.login)
    }
  }, [dispatch, status, navigate])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])
  return null
}
