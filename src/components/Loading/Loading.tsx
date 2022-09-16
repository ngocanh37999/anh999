import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import * as S from './loading.style'

const Loading = () => {
  const loading = useSelector((state: RootState) => state.app.loading)
  if (loading > 0) {
    return <S.StyledLoading color="secondary" />
  }
  return null
}

export default Loading
