import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Fallback from './components/Fallback/Fallback'
import { path } from './constants/path'
import { MainLayout } from './layouts/MainLayout'

// const Home = lazy(() =>
//   import('./pages/Home/Home').then(({ Home }) => ({
//     default: Home
//   }))
// )

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(
  () => import('./components/ProductDetail/ProductDetail')
)

const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path={path.home}
        // exact
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
