import SvgLike from 'src/components/svg/SvgLike/SvgLike'
import SvgLove from 'src/components/svg/SvgLove/SvgLove'
import TraiTim from 'src/components/svg/TraiTim/TraiTim'

// export const emojis = [
//   // {
//   //   label: 'Trái tim',
//   //   symbol: <TraiTim />
//   // },
//   {
//     label: 'Like',
//     symbol: <SvgLike />
//   }
//   // {
//   //   label: 'Love',
//   //   symbol: <SvgLove />
//   // }
// ]

// -------------------------------------Dùng luôn: Ví dụ: <SvgLike />

// cách 1:
class Svg {
  message: string
  svgUI: {
    SvgLike: ({
      onMouseEnter,
      onMouseLeave
    }: {
      onMouseEnter: any
      onMouseLeave: any
    }) => JSX.Element
    SvgLove: () => JSX.Element
    TraiTim: () => JSX.Element
  }
  constructor() {
    this.message = 'Lấy dữ liệu thành công'
    this.svgUI = {
      SvgLike: SvgLike,
      SvgLove: SvgLove,
      TraiTim: TraiTim
    }
  }
}
const svg = new Svg()
export default svg
// import ref from 'src/components/Ref/ref'
// const uiComponentSvg = { ...svg.svgUI }
// uiComponentSvg.SvgLike
