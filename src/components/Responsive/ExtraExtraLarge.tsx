import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type ExtraExtraLargeProps = {
  children?: ReactNode
}

export default function ExtraExtraLarge({ children }: ExtraExtraLargeProps) {
  const extraExtraLarge = useMediaQuery({
    maxWidth: 1200
  })
  return <>{extraExtraLarge && children}</>
}
