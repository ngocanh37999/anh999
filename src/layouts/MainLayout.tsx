import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

// type Props = {
//   title: string
//   children?: React.ReactNode
// }

export const MainLayout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Header />
    {children}
    <Footer />
  </div>
)
