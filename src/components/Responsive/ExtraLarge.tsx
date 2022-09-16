import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type ExtraLargeProps = {
  children?: ReactNode
}

export default function ExtraLarge({ children }: ExtraLargeProps) {
  const extraLarge = useMediaQuery({
    maxWidth: 1200
  })
  return <>{extraLarge && children}</>
}
