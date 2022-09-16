import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type LargeProps = {
  children?: ReactNode
}

export default function Large({ children }: LargeProps) {
  const large = useMediaQuery({
    maxWidth: 992
  })
  return <>{large && children}</>
}
