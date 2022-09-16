import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { getProducts } from 'src/slice/product/product.slice'

export default function Authorization() {
  // const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const authenticated = useAuthenticated()
  // useEffect(() => {
  //   if (authenticated) {
  //     // dispatch(getUsers())
  //     // dispatch(getProducts())
  //   }
  // }, [dispatch, authenticated])

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch])

  return null
}
