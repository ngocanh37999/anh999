import * as S from './svgMobile.style'
export default function SvgMobile() {
  return (
    <S.SvgMobile>
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* <title>mobile-line</title> */}
        <path
          d="M25,4H11A2,2,0,0,0,9,6V30a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4ZM11,6H25V24H11Zm0,24V26H25v4Z"
          className="clr-i-outline clr-i-outline-path-1"
        />
        <rect
          x={17}
          y={27}
          width={2}
          height={2}
          className="clr-i-outline clr-i-outline-path-2"
        />
        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
      </svg>
    </S.SvgMobile>
  )
}
