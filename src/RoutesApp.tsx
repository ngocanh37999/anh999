import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Cart from './components/Cart/Cart'
import CartDetail from './components/CartDetail/CartDetail'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Fallback from './components/Fallback/Fallback'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard/AuthenticatedGuard'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard/UnauthenticatedGuard'
import { MainLayout } from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
import User from './pages/User/User'

// const Home = lazy(() =>
//   import('./pages/Home/Home').then(({ Home }) => ({
//     default: Home
//   }))
// )

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(
  () => import('./components/ProductDetail/ProductDetail')
)
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))

const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
export default function RoutesApp() {
  return (
    <Routes>
      {/* pages Home */}
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      />

      {/* pages ProductDetail */}
      <Route
        path={path.productDetail}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <ProductDetail />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      />

      {/*  */}
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />

      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Register />
                </ErrorBoundary>
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />

      <Route
        path={path.user}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <User />
                </ErrorBoundary>
              </Suspense>
            </MainLayout>
          </AuthenticatedGuard>
        }
      />

      <Route
        path={path.cart}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <CartDetail />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path={path.notFound}
        element={
          <Suspense fallback={<Fallback />}>
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  )
}
