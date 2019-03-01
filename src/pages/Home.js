import React, { Component } from 'react'
import Packages from '../components/Packages'

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Watch your favourite shows.</h1>
                    <h2>Anytime. Anywhere. Any Device</h2>
                    <h3>Just for 20,000/= Tshs. or US $8.99 per month</h3>
                    </div>
                </div>
            </div>
        </div>
        <Packages/>
      </div>
    )
  }
}

export default Home
