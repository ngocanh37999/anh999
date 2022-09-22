import styled, { css } from 'styled-components'
import { SvgFacebook } from 'src/components/svg/SvgFacebook/svgFacebook.style'
import { SvgTiktok } from 'src/components/svg/SvgTiktok/svgTiktok.style'
import { SvgTwitter } from 'src/components/svg/SvgTwitter/svgTwitter.style'
import { SvgYoutube } from 'src/components/svg/SvgYoutube/svgYoutube.style'

const centerDiv = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const SocialLink = styled.div``
export const LienKet = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  border-radius: 50%;
  transition: all 0.5s ease;
  :hover {
    color: #24262b;
    background-color: #ffffff;
  }
  position: relative;
  ${SvgFacebook} {
    ${centerDiv}
  }

  ${SvgYoutube} {
    ${centerDiv}
  }

  ${SvgTwitter} {
    ${centerDiv}
  }

  ${SvgTiktok} {
    ${centerDiv}
  }
`
