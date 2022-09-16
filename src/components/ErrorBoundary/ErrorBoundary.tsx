import { Component, ErrorInfo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong.
          <Link to={path.home}>Click To Home Page</Link>
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
