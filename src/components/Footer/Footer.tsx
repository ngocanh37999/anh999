import SocialLink from './SocialLink/SocialLink'
import { useMediaQuery } from 'react-responsive'

import * as S from './footer.style'
export default function Footer() {
  const footerList = [
    {
      itemTitle: 'GIỚI THIỆU NGOCANH',
      itemMeta: [
        'Giới Thiệu Công Ty',
        'Liên Hệ Hợp Tác Kinh Doanh',
        'Thông Tin Tuyển Dụng',
        'Tin Tức'
      ]
    },
    {
      itemTitle: 'HỖ TRỢ KHÁCH HÀNG',
      itemMeta: [
        'Hướng Dẫn Mua Hàng Trực Tuyến',
        'Hướng Dẫn Thanh Toán',
        'Hướng Dẫn Mua Hàng Trả Góp',
        'In Hóa Đơn Điện Tử',
        'Góp Ý, Khiếu Nại'
      ]
    },
    {
      itemTitle: 'CHÍNH SÁCH CHUNG',
      itemMeta: [
        'Chính Sách, Quy Định Chung',
        'Chính Sách Bảo Hành',
        'Bảo Mật Thông Tin Khách Hàng',
        'Chính Sách Nhập Lại Tính Phí'
      ]
    },
    {
      itemTitle: 'THEO DÕI NGOCANH TRÊN',
      // itemMeta: <SocialLink />
      itemMeta: [<SocialLink />]
    }
  ]

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="container">
          <S.FooterController>
            <S.FooterList>
              {footerList.map((footer, index) => (
                <S.Footer key={index}>
                  <S.FooterItem>
                    <S.FooterItemWrapper>
                      <S.Content>
                        {/*  */}
                        <S.FooterItemInfo>
                          <S.FooterItemTitle>
                            {footer.itemTitle}
                          </S.FooterItemTitle>
                          <S.FooterItemMeta>
                            {footer.itemMeta.map((meta, idx) => {
                              // console.log(idx)
                              return (
                                <S.FooterItemMetaItem to="" key={idx}>
                                  <div style={{ marginBottom: '10px' }}>
                                    {meta}
                                  </div>
                                </S.FooterItemMetaItem>
                              )
                            })}
                          </S.FooterItemMeta>
                        </S.FooterItemInfo>
                      </S.Content>
                    </S.FooterItemWrapper>
                  </S.FooterItem>
                </S.Footer>
              ))}
            </S.FooterList>
            <S.Footer1>
              <div>© 2022 Ngọc Anh Shop. Tất cả các quyền được bảo lưu</div>
              <S.Language>
                <span>Tiếng Anh</span>
                <span>Tiếng Việt</span>
              </S.Language>
            </S.Footer1>
          </S.FooterController>
        </div>
      )}

      {isTabletOrMobile && (
        <S.FooterController>
          <S.FooterListTabletOrMobile>
            {footerList.map((footer, index) => (
              <S.FooterTabletOrMobile key={index}>
                <S.FooterItemTabletOrMobile>
                  <S.FooterItemWrapper>
                    <S.Content>
                      {/*  */}
                      <S.FooterItemInfo>
                        <S.FooterItemTitle>
                          {footer.itemTitle}
                        </S.FooterItemTitle>
                        <S.FooterItemMeta>
                          {footer.itemMeta.map((meta, idx) => {
                            // console.log(idx)
                            return (
                              <S.FooterItemMetaItem to="" key={idx}>
                                <div style={{ marginBottom: '10px' }}>
                                  {meta}
                                </div>
                              </S.FooterItemMetaItem>
                            )
                          })}
                        </S.FooterItemMeta>
                      </S.FooterItemInfo>
                    </S.Content>
                  </S.FooterItemWrapper>
                </S.FooterItemTabletOrMobile>
              </S.FooterTabletOrMobile>
            ))}
          </S.FooterListTabletOrMobile>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              © 2022 Ngọc Anh Shop.
              {/* Tất cả các quyền được bảo lưu */}
            </div>

            <S.Language>
              <span>Tiếng Anh</span>
              <span>Tiếng Việt</span>
            </S.Language>
          </div>
        </S.FooterController>
      )}
    </div>
  )
}
