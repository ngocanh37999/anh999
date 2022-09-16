import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type MobileProps = {
  children?: ReactNode
}
export default function Mobile({ children }: MobileProps) {
  const mobile = useMediaQuery({
    maxWidth: 767
  })
  return <>{mobile && children}</>
}
