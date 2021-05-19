import SidebarMenuItem from "./SidebarMenuItem";
import Logo from '../../../assets/logo.svg'
import LoginLogo from '../../../assets/login.svg';
import UsersLogo from '../../../assets/users.svg';
import BlogsLogo from '../../../assets/blogs.svg';

import './style.scss'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>

      <div className='sidebar-header'>
          <figure>
            <img src={Logo} alt={'Dashboard Logo'} />
          </figure>
          <h3>Dashboard Kit</h3>
      </div>

      <div className="sidebar-menu-items">
        <SidebarMenuItem logo={LoginLogo} content={'Login'} isSelected/>
        <SidebarMenuItem logo={UsersLogo} content={'Users'}/>
        <SidebarMenuItem logo={BlogsLogo} content={'Posts'}/>
      </div>

    </div>
  );
};

export default Sidebar;
