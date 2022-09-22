import Footer from 'src/components/Footer/Footer'
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister'
import { ReactNode } from 'react'
type RegisterLayoutProps = {
  children?: ReactNode
  title: string
}
export default function RegisterLayout({
  children,
  title
}: RegisterLayoutProps) {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  )
}
