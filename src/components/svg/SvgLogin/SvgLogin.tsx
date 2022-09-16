import { CSSProperties } from 'react'
import * as S from './svgLogin.style'
export default function SvgLogin() {
  return (
    <S.SvgLogin>
      <svg
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        style={{ enableBackground: 'new 0 0 32 32' } as CSSProperties}
        xmlSpace="preserve"
      >
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\n'
          }}
        />
        <circle className="st0" cx={16} cy={16} r={14} />
        <circle className="st0" cx={16} cy={13} r={5} />
        <path
          className="st0"
          d="M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7"
        />
      </svg>
    </S.SvgLogin>
  )
}
