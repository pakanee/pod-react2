import React from 'react';

const Login =(props) =>{
    return(
        <from >
            <div>
                <input type="text" name="username"/>
            </div>
            <div>
                <input type="password" name="password" />
            </div>
            <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
                <button type="submit">Sign In</button>
            </div>
        </from>
    );
}
export default Login;
