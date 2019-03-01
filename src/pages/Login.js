import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="login_container">
                        <h1>Log in</h1>
                        <p>New to BongoFlix account? <span><Link to="/register" className="register">Register</Link></span></p>
                        <form>
                            <div className="form-group">
                                <input type="email" className="email_input form-control" name="email" placeholder="Enter e-mail"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="password_input form-control" name="password" placeholder="Enter password"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Log in</button>
                            </div>
                            <hr className="login_line"/>
                            <p><Link to="/reset-password" className="reset_password btn btn-sm btn-info">Forgot password?</Link></p>
                        </form>
                    </div>
                </div>
             </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Login
