import React from "react";
import "./sectionSupport.css";
import { NavbarSectionHome } from "../../Home/components/navbar";

export const SectionSupport = () => {
  return (
    
    <div className="body-Support ">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <div>
      <>
      
      <NavbarSectionHome/>
        <div className="container p-[15vh]">
          <section className="section mb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7 text-center desc">
                  <h2 className="h1 mb-3">How can we help?</h2>
                  <p className="mx-lg-8">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                  <form className="d-flex flex-column flex-md-row mt-4">
                    <input
                      type="email"
                      className="form-control me-sm-2 mb-2 mb-sm-0"
                      placeholder="you@yoursite.com"
                    />{" "}
                    <button
                      className="btn btn-primary flex-shrink-0"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="section pt-0">
            <div className="container">
              <div className="row gy-4 justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-question-circle" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Buying and Item Support
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-id-badge" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Licensing
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-user" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Your Account
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-trophy" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Copyright and Trademarks
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-book" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Tax &amp; Compliance
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="icon-lg bg-primary rounded-3 text-white">
                        <i className="fa fa-check" />
                      </div>
                      <div className="ps-3 col">
                        <h5 className="h6 mb-2">
                          <a className="stretched-link text-reset" href="#">
                            Licensing
                          </a>
                        </h5>
                        <p className="m-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
    </div>
  );
};
