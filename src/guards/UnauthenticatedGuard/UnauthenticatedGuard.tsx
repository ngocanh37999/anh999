import { Fragment, ReactNode } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Navigate } from 'react-router-dom'
import { path } from 'src/constants/path'

type UnauthenticatedGuardProps = {
  children: ReactNode
}
export default function UnauthenticatedGuard({
  children
}: UnauthenticatedGuardProps) {
  const authenticated = useAuthenticated()

  if (authenticated) {
    return <Navigate to={path.home} />
  }

  return <Fragment>{children}</Fragment>
}
