import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="register_container">
                        <h1>Register</h1>
                        <p>Don’t have a BongoFlix account? <span><Link to="/login" className="login">Log in</Link></span></p>
                        <form action="/member/payment_method">
                            <div className="form-group">
                                <input type="email" className="email_input form-control" name="email" placeholder="Enter e-mail"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="password_input form-control" name="password" placeholder="Enter password"/>
                            </div>
                            <div className="form-group">
                                <select className="plan_selection custom-select form-control">
                                    <option selected> Choose plan</option>
                                    <option value="Standard"> Standard</option>
                                    <option value="Premium"> Premium</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Become a member</button>
                            </div>
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

export default Register
