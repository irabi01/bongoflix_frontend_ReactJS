import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg fixed-top navigation_bar">
            <Link className="navbar-brand" to="/">BongoFlix</Link>
            <button id="cpBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <div></div>
                  <div></div>
                  <div></div>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link try_for_free m-2" to="/register">Try it free for 30 days</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link subscription_button  m-2" to="/member/payment_method">Start your subscription</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link account_button  m-2" to="/member/account">My Account</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link login_button btn-primary  m-2" to="/login">Log in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link logout_button  m-2" to="/login">Log out</Link>
                </li>
                </ul>

            </div>
            </nav>
      </div>
    )
  }
}

export default Navigation
