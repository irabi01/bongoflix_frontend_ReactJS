import React, { Component } from 'react'

export class ForgetPassword extends Component {
  render() {
    return (
      <div>
        <div className="forget_password">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="forget_password_container">
                        <h1>Reset your password</h1>
                        <p>Enter your email address below and we'll send you the password reset instruction</p>
                        <form>
                            <div className="form-group">
                                <input type="email" className="email_input form-control" name="email" placeholder="Enter e-mail"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary reset_password">Reset password</button>
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

export default ForgetPassword
