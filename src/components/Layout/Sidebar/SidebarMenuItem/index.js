import classNames from 'classnames'
import './style.scss'

const SidebarMenuItem = ({ content, logo, isSelected }) => {
    return (
        <div
            className={classNames('sidebar-menu-item', {
                'sidebar-menu-item-selected': isSelected,
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
