import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export class PaymentMethod extends Component {
  render() {
    return (
      <div>
        <div className="payment_method">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>Select payment method to activate free trial</h1>
                          <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Mobile Money
                                  </button>
                                </h2>
                              </div>

                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Credit Card
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                  <form className="checkout" action="/member/account">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Fullname"/>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Month"/>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <input type="number" className="form-control" placeholder="Year"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-9">
                                        <div className="form-group">
                                          <input type="number" className="form-control" placeholder="Account number"/>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <input type="number" className="form-control" placeholder="VCC"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-9">
                                        <div className="form-group">
                                          <select className="form-control">
                                            <option>Select package name</option>
                                            <option value="STANDARD">Standard $8</option>
                                            <option value="PREMIUM">Premium $12</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <button type="submit" className="btn btn-sm btn_purchase">Purchase</button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    PayPal
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
