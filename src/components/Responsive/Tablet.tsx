import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type TabletProps = {
  children?: ReactNode
}
export default function Tablet({ children }: TabletProps) {
  const tablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 991
  })
  return <>{tablet && children}</>
}
