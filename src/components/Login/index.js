import './style.scss'
const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <form>

                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' placeholder='username'/>

                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password'/>
                </form>
            </div>
        </div>
    );
};

export default Login;
