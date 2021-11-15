import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

function Login() {
    return (
        <>
            <Header/>
            <Navigation/>
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li className="active">Login Page</li>
                    </ol>
                </div>
            </div>
            {/* Login */}
            <div className="login">
                <div className="container">
                    <h2>Login Form</h2>
                
                    <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                        <form>
                            <input type="email" placeholder="Email Address" required=" " />
                            <input type="password" placeholder="Password" required=" " />
                            <div className="forgot">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <input type="submit" value="Login"/>
                        </form>
                    </div>
                    <h4>For New People</h4>
                    <p><Link to="/register">Register Here</Link> (Or) go back to <Link to="/">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
                </div>
            </div>
    {/* Footer */}
    <Footer/>
        </>
    )
}

export default Login
