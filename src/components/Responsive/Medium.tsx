import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
type MediumProps = {
  children?: ReactNode
}

export default function Medium({ children }: MediumProps) {
  const medium = useMediaQuery({
    maxWidth: 768
  })
  return <>{medium && children}</>
}
