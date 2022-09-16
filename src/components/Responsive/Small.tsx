import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type SmallProps = {
  children?: ReactNode
}

export default function Small({ children }: SmallProps) {
  const small = useMediaQuery({
    maxWidth: 576
  })
  return <>{small && children}</>
}
