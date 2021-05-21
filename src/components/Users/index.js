import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../store/actions/usersActions'
import UsersTableItem from './UsersTableItem'
import './style.scss'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersReducer.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className="users">
            <div className="users-table">
                <div className="users-table-header">
                    <h5 className="users-table-header-avatar">Avatar</h5>
                    <h5 className="users-table-header-name">Name</h5>
                    <h5 className="users-table-header-phone-number">
                        Phone Number
                    </h5>
                    <h5 className="users-table-header-city">City</h5>
                    <h5 className="users-table-header-company">Company</h5>
                </div>
                <div className="users-table-content">
                    {users.map((user) => (
                        <div key={user.id}>
                            <UsersTableItem user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users
