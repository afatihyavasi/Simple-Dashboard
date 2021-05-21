import './style.scss'
const UsersTableItem = ({ user }) => {
    return (
        <div className="users-table-item">
            <figure className="users-table-item-avatar">
                <img src={user.avatar} alt={user.userName} />
            </figure>
            <h5 className="users-table-item-avatar">{user.userName}</h5>
            <h5 className="users-table-item-phone-number">
                {user.phoneNumber}
            </h5>
            <h5 className="users-table-item-city">{user.city}</h5>
            <h5 className="users-table-item-company">{user.company}</h5>
        </div>
    )
}

export default UsersTableItem
