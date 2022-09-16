import InputApi from 'src/components/InputApi/InputApi'
import Menu from 'src/components/Menu/Menu'
import Desktop from 'src/components/Responsive/Desktop'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'
import SortBar from 'src/components/SortBar/SortBar'
import TestTongHop from 'src/TEST/Ngay10Thang9Nam2022/TestTongHop'
import Counter from 'src/TEST/Ngay12Thang9Nam2022/Counter'
import Profile from 'src/TEST/Ngay12Thang9Nam2022/Profile'
import TestFacebookClone from 'src/TEST/Ngay13Thang9Nam2022/TestFacebookClone/TestFacebookClone'
import TestResponsiveUpdate from 'src/TEST/Ngay13Thang9Nam2022/TestResponsiveUpdate/TestResponsiveUpdate'

import * as S from './home.style'
export default function Home() {
  // CSSProperties
  return (
    <>
      {/* <Menu />
      <TestFacebookClone /> */}
      {/* <TestResponsiveUpdate /> */}
      {/* <TestProject /> */}
      {/* <Desktop>
        <S.Container className="container">
          <SortBar />
        </S.Container>
      </Desktop> */}

      <Mobile>
        <SortBar />
      </Mobile>

      {/* <S.Main>
            <InputApi />
            <Profile />
            <Counter />
            <TestTongHop />
            <SortBar />
          </S.Main> */}

      <Tablet>
        <SortBar />
      </Tablet>

      <div className="container">
        <Desktop>
          <SortBar />
        </Desktop>
      </div>
    </>
  )
}
