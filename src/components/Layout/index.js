import Header from './Header'
import Sidebar from './Sidebar'

import './style.scss'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout-container">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout
