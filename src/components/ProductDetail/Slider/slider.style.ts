import styled from 'styled-components'

export const Slider = styled.div``

export const SliderContainer = styled.div`
  width: 480px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.sliderContainerTabletOrMobile {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper-slide {
    padding-top: 100%;
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-button-prev {
    left: 30;
    :after {
      font-size: 2em;
    }
  }

  .swiper-button-next {
    right: 30;
    :after {
      font-size: 2em;
    }
  }
`
