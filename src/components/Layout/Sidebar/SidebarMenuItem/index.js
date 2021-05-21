import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import './style.scss'

const SidebarMenuItem = ({ content, logo }) => {
    let location = useLocation()
    return (
        <div
            className={classNames('sidebar-menu-item', {
                'sidebar-menu-item-selected':
                    location.pathname.substr(1) === content.toLowerCase(),
            })}
        >
            <figure>
                <img src={logo} alt={`${content} logo`} />
            </figure>
            <h2>{content}</h2>
        </div>
    )
}

export default SidebarMenuItem
