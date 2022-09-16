import 'src/assets/styles/global.scss'
import Authorization from './components/Authorization/Authorization'
import RoutesApp from './RoutesApp'
import { ToastContainer } from 'react-toastify'
import Loading from './components/Loading/Loading'

function App() {
  return (
    <div className="App">
      <RoutesApp />
      <Loading />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
