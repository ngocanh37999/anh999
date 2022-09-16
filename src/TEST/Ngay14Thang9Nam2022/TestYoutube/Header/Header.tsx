import // MdMenu,
// MdSearch,
// MdVideoCall
// MdApps,
// MdNotifications
'react-icons/md'
import { useMenu } from '../useMenu'
import * as S from './header.style'

export default function Header() {
  const { clickMenu } = useMenu()
  return (
    <>
      <S.Wrapper>
        <S.Navigation>
          <button type="button" onClick={clickMenu}>
            {/* <MdMenu /> */}
          </button>
          {/* <img src={logo} alt="Youtube" /> */}
        </S.Navigation>

        <S.Search>
          <form>
            <input type="text" placeholder="Pesquisar" />

            <button type="submit">{/* <MdSearch /> */}</button>
          </form>
        </S.Search>

        <S.Actions>
          <S.ButtonAction type="button">{/* <MdVideoCall /> */}</S.ButtonAction>

          <S.ButtonAction type="button">{/* <MdApps /> */}</S.ButtonAction>

          <S.ButtonAction type="button">
            {/* <MdNotifications /> */}
          </S.ButtonAction>

          <S.Profile>
            {' '}
            <S.ProfileNotImage />
          </S.Profile>
        </S.Actions>
      </S.Wrapper>
    </>
  )
}
