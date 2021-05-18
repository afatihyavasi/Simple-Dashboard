import './style.scss'
import SearchLogo from '../../../assets/search.svg'
import NotificationLogo from '../../../assets/notification.svg'
import HeaderAvatar from '../../../assets/headerAvatar.png'

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">Varolan sayfa ile degistir</h3>

            <div className="header-info">
                <div className="header-icons">
                    <figure>
                        <img src={SearchLogo} alt={'Search logo'} />
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

            {/*<hr width="1" size="500" style={{margin:20}}/>*/}
        </div>
    )
}

export default Header
