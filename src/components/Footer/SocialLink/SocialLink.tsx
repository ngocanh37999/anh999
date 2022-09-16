import SvgFacebook from 'src/components/svg/SvgFacebook/SvgFacebook'
import SvgTiktok from 'src/components/svg/SvgTiktok/SvgTiktok'
import SvgTwitter from 'src/components/svg/SvgTwitter/SvgTwitter'
import SvgYoutube from 'src/components/svg/SvgYoutube/SvgYoutube'
import * as S from './socialLink.style'
export default function SocialLink() {
  return (
    <S.SocialLink>
      <S.LienKet>
        <SvgFacebook />
      </S.LienKet>
      <S.LienKet>
        <SvgYoutube />
      </S.LienKet>
      <S.LienKet>
        <SvgTwitter />
      </S.LienKet>
      <S.LienKet>
        <SvgTiktok />
      </S.LienKet>
    </S.SocialLink>
  )
}
