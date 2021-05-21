import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import Input from '../Input'
import SignOut from '../Login/SignOut'
import { logIn } from '../../store/actions/loginActions'

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' })
    const dispatch = useDispatch()
    const isLogged = useSelector((state) => state.loginReducer.isLogged)
    const errorMessage = useSelector((state) => state.loginReducer.errorMessage)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn(form))
    }

    return (
        <>
            {isLogged ? (
                <SignOut />
            ) : (
                <div className="login">
                    <div className="login-container">
                        <h5>username : admin , password : admin</h5>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    name={'username'}
                                    label={'Username'}
                                    isRequired
                                    value={form.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Input
                                    type={'password'}
                                    name={'password'}
                                    label={'Password'}
                                    isRequired
                                    value={form.password}
                                    errors={errorMessage}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="button-container">
                                <button type={'submit'}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
