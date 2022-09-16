import React from 'react'
import * as S from './slider.style'
// -----------import thư viện-----------
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// -----------import thư viện-----------

// -----------import thư viện-----------
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, Autoplay } from 'swiper'
import usePopover from 'src/hooks/usePopover'
import { useMediaQuery } from 'react-responsive'
// -----------import thư viện-----------

// type PropsSlider = {
//   images[]
// }

export default function Slider({ productImages }: any) {
  const { activePopover, showPopover, hidePopover } = usePopover()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <>
      {isDesktopOrLaptop && (
        <S.Slider>
          <S.SliderContainer>
            <S.SwiperWrapper
              onMouseEnter={showPopover}
              onMouseLeave={hidePopover}
            >
              <Swiper
                loop={true}
                // spaceBetween={10}
                navigation={activePopover}
                // navigation={true}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 100 }}
                autoplay={true}
                modules={[Navigation, Thumbs, Pagination, Autoplay]}
                grabCursor={true}
              >
                {productImages.map(
                  (
                    item: string | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <SwiperSlide key={index}>
                      <img src={item} alt="" />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </S.SwiperWrapper>
          </S.SliderContainer>
        </S.Slider>
      )}

      {isTabletOrMobile && (
        <S.Slider>
          <S.SliderContainer className="sliderContainerTabletOrMobile">
            <S.SwiperWrapper
              onMouseEnter={showPopover}
              onMouseLeave={hidePopover}
            >
              <Swiper
                loop={true}
                // spaceBetween={10}
                navigation={activePopover}
                // navigation={true}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 100 }}
                autoplay={true}
                modules={[Navigation, Thumbs, Pagination, Autoplay]}
                grabCursor={true}
              >
                {productImages.map(
                  (
                    item: string | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <SwiperSlide key={index}>
                      <img src={item} alt="" />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </S.SwiperWrapper>
          </S.SliderContainer>
        </S.Slider>
      )}
    </>
  )
}
