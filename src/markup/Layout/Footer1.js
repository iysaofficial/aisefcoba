import React, { Component } from 'react';

class Footer1 extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="site-footer text-uppercase">
          <div className="footer-top bg-primary">
            <div className="container">
              <div className="row">

                {/* <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">
                      Important Link
                    </h5>
                    <ul>
                      <li>
                        <Link to={'#'}>
                          Guide Book{' '}
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          Example abstract
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          Upload Documents
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          Payment Fee
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    {/* <h5 className="m-b30 text-white">
                      Useful Link
                    </h5> */}
                    {/* <ul>
                      <li>
                        <Link to={'#'}>
                          Registration
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          About Us{' '}
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link to={'#'}>
                          Categories
                        </Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">
                      Contact us
                    </h5>
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i>
                        <strong>address</strong>
                        <a href="https://goo.gl/maps/muWqimWHYjAgWSaQ8" 
                        rel="noreferrer noopener"
                        target="_blank">
                          {' '}
                          Jl. Kemang No. 63 RT 03
                          RW 06 
                        </a>{' '}
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>phone</strong>
                        <a href="https://wa.me/6281770914129" 
                        rel="noreferrer noopener"
                        target="_blank">
                          +62 817-7091-4129
                        </a>
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <strong>email</strong>
                        <a href="mailto:aseaninnovative.aisef@gmail.com"
                        rel="noreferrer noopener"
                         target="_blank">
                          aseaninnovative.aisef@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">
                      Subscribe Our Social To
                      Follow
                    </h5>
                    <p className="text-capitalize m-b20">
                      "Innovation" is a must in
                      today's modern era. This
                      simple word demands a huge
                      result within creating a new
                      works which is called
                      "Invention" .
                    </p>

                    <ul className="list-inline m-a0">
                      <li>
                        <a
                          href="https://www.facebook.com/IYSA-Official-384186105532427/"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button facebook circle mr-1"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aseaninnovative.aisef@gmail.com"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button google-plus circle mr-1"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="http://instagram.com/iysa_official"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="site-button instagram circle mr-1"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                  {' '}
                  <span>
                    Copyright &copy; {currentYear}{' '} AISEEF. 
                  </span>{' '}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <span>
                          Made{' '}<i className="ti-heart"></i>
                          <a href="https://www.iysa.or.id">
                          {' '}IYSA IT
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer1;
