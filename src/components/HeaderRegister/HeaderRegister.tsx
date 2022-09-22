import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import * as S from './headerRegister.style'
type HeaderRegisterProps = {
  title: string
}
export default function HeaderRegister({ title }: HeaderRegisterProps) {
  return (
    <S.Header>
      <S.Container className="container">
        <S.HeaderBrand>
          <S.Logo to={path.home}>
            Anh<span>Shop</span>
          </S.Logo>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="link" style={{ color: ' #007bff' }}>
          Cần trợ giúp
        </Link>
      </S.Container>
    </S.Header>
  )
}
