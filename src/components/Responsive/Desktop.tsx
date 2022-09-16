import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type DesktopProps = {
  children?: ReactNode
}
export default function Desktop({ children }: DesktopProps) {
  const desktop = useMediaQuery({
    minWidth: 992
  })
  return <>{desktop && children}</>
}
