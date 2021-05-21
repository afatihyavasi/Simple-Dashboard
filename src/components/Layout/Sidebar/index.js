import SidebarMenuItem from './SidebarMenuItem'
import Logo from '../../../assets/logo.svg'
import LoginLogo from '../../../assets/login.svg'
import UsersLogo from '../../../assets/users.svg'
import BlogsLogo from '../../../assets/blogs.svg'

import './style.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <figure>
                    <img src={Logo} alt={'Dashboard Logo'} />
                </figure>
                <h3>Dashboard Kit</h3>
            </div>

            <div className="sidebar-menu-items">
                <Link to={'login'}>
                    <SidebarMenuItem logo={LoginLogo} content={'Login'} />
                </Link>
                <Link to={'/users'}>
                    <SidebarMenuItem logo={UsersLogo} content={'Users'} />
                </Link>
                <Link to={'/posts'}>
                    <SidebarMenuItem logo={BlogsLogo} content={'Posts'} />
                </Link>
                <Link to={'/inputs'}>
                    <SidebarMenuItem logo={BlogsLogo} content={'Inputs'} />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
