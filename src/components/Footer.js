import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <hr className="footer_line"/>
                        <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())} BongoFlix. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer
