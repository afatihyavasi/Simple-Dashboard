import './style.scss'
import SearchLogo from '../../../assets/search.svg'
import NotificationLogo from '../../../assets/notification.svg'
import HeaderAvatar from '../../../assets/headerAvatar.png'

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">Login</h3>

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
