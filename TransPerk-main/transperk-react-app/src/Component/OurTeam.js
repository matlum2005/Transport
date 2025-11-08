import './styles/team.css'
import React, { Component } from 'react'
import userlogo from './img/user.jpg'

export class OurTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Shakib Rana</h2>
                            <p>Student of ACTS GZB in course e-DAC started in March 2021</p>

                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;shakibrana@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7827118384</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Aabid khan</h2>
                            <p>Student of ACTS GZB in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;Aabidrana@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;8384036331</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Aakil Rana</h2>
                            <p>Student of ACTS GZB in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;AakilRana@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;9836262625</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item offset-md-2">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Matloob ali</h2>
                            <p>Student of ACTS GZB in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;MatloobRana@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;8394045420</i></h5>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Ali</h2>
                            <p>Student of ACTS GZB in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;ali@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;9388336362</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="fa-style"><i className="fa fa-chevron-left" aria-hidden="true" /></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="fa-style"><i className="fa fa-chevron-right" aria-hidden="true" /></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div></div></div>

      </>
    )
  }
}

export default OurTeam
