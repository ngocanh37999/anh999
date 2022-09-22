import 'src/assets/styles/global.scss'
import Authorization from './components/Authorization/Authorization'
import RoutesApp from './RoutesApp'
import { ToastContainer } from 'react-toastify'
import Loading from './components/Loading/Loading'

function App() {
  return (
    <>
      <RoutesApp />
      <Loading />
      <ToastContainer />
      <Authorization />
    </>
  )
}

export default App
