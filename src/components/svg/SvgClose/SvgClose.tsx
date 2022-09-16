import * as S from './svgClose.style'
export default function SvgClose() {
  return (
    <S.SvgClose>
      <svg
        viewBox="0 0 16 16"
        stroke="#EE4D2D"
        className="home-popup__close-button"
      >
        <path strokeLinecap="round" d="M1.1,1.1L15.2,15.2" />
        <path strokeLinecap="round" d="M15,1L0.9,15.1" />
      </svg>
    </S.SvgClose>
  )
}
