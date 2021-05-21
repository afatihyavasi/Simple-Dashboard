import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../store/actions/loginActions'
import './style.scss'
const SignOut = () => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.loginReducer.username)
    const handleClick = () => {
        dispatch(logOut())
    }
    return (
        <div className="signOut">
            <div className="signOut-container">
                <h5>{`${username} 👋`}</h5>
                <button onClick={handleClick}>Log out</button>
            </div>
        </div>
    )
}

export default SignOut
