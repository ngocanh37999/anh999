import { Fragment, ReactNode } from 'react'

import * as S from './popover.style'
type PropsPopover = {
  active: boolean
  children?: ReactNode
}
export default function Popover({ active, children }: PropsPopover) {
  return (
    <Fragment>
      {active && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </Fragment>
  )
}
