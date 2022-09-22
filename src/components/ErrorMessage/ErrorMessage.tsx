import { Message } from './errorMessage.style'
type ErrorMessageProps = {
  errors: {}
  name: string
}
export default function ErrorMessage({ errors, name }: ErrorMessageProps) {
  const error = errors[name]
  return <Message>{error && error.message}</Message>
}
