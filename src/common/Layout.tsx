import {FC, ReactNode} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout