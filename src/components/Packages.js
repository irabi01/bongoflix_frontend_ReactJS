import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export class Packages extends Component {
  render() {
    return (
      <div>
          <div className="packages">
            <div className="container">
                <h1>Pricing Plans</h1>
                <div className="line_package"></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="pricingtable orange">
                            <h3 className="title">Standard</h3>
                            <span className="price_value">
                                $8 <span className="month">/month</span>
                            </span>
                        </div>
                        <ul className="pricing_content">
                            <li>30 days free</li>
                            <li>Watch in all devices</li>
                            <li>Full HD</li>
                            <li>Live chat</li>
                            <li>Only for single user</li>
                        </ul>

                    </div>

                    <div className="col-md-4">
                        <div className="pricingtable pink">
                            <h3 className="title">Premium</h3>
                            <span className="price_value">
                                $12 <span className="month">/month</span>
                            </span>
                        </div>
                        <ul className="pricing_content">
                            <li>30 days free</li>
                            <li>Watch in all devices</li>
                            <li>Full HD</li>
                            <li>Live chat</li>
                            <li>Allow four user</li>
                        </ul>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Packages
