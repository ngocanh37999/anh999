import { useSelector } from 'react-redux'
type RootState = {
  auth: {
    profile: {
      _id: string
    }
  }
}

export function useAuthenticated() {
  return useSelector((state: RootState) => Boolean(state.auth.profile._id))
}
