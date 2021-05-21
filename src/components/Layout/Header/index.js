import './style.scss'
import SearchLogo from '../../../assets/search.svg'
import NotificationLogo from '../../../assets/notification.svg'
import HeaderAvatar from '../../../assets/headerAvatar.png'
import { useLocation } from 'react-router-dom'
const Header = () => {
    let location = useLocation()
    const getTitle = (lct) => {
        const removedSlash = lct.pathname.substr(1)
        return `${removedSlash.charAt(0).toUpperCase()}${removedSlash.slice(1)}`
    }
    return (
        <div className="header">
            <h3 className="header-title">{getTitle(location) || 'Overview'}</h3>

            <div className="header-info">
                <div className="header-icons">
                    <figure>
                        <img src={SearchLogo} alt={'Search logo'} />
                    </figure>
                    <figure>
                        <img src={NotificationLogo} alt={'Notification logo'} />
                    </figure>
                </div>

                <div className="header-user-info">
                    <h4>Jones Ferdinand</h4>
                    <figure>
                        <img src={HeaderAvatar} alt={'Header avatar'} />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Header
