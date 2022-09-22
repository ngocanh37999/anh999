import { Fragment, ReactNode } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Navigate } from 'react-router-dom'
import { path } from 'src/constants/path'
type AuthenticatedGuardProps = {
  children: ReactNode
}
export default function AuthenticatedGuard({
  children
}: AuthenticatedGuardProps) {
  const authenticated = useAuthenticated()
  // console.log(authenticated)

  if (!authenticated) {
    return <Navigate to={path.login} />
  }

  return <Fragment>{children}</Fragment>
}
