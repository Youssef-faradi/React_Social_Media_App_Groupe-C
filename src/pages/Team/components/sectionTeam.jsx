import React, { useState } from "react";
import "./sectionTeam.css";
import zakaria from "../../../assets/images/Picsart_22-12-18_00-49-44-927.png";

export const Sectionteam = () => {
  const [MyTeam, setMyteam] = useState([
    {
      full_name: " zakaria",
      job: "manager",
      images: zakaria,
    },

    {
        full_name: " zakaria",
        job: "manager",
        images: zakaria,
      },

      {
        full_name: " zakaria",
        job: "manager",
        images: zakaria,
      },

      {
        full_name: " zakaria",
        job: "manager",
        images: zakaria,
      },




  ]);

  return (
    
    <div className="body-team">
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
          integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
          crossOrigin="anonymous"
        />
        <div className="container bootdey">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our Teams</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Build responsive, mobile-first projects on the web with the
                  world's most popular front-end component library.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            {MyTeam.map((element, index) => (
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                <div className="team text-center rounded p-3 py-4">
                  <img
                    src={zakaria}
                    className="img-fluid avatar avatar-medium shadow rounded-pill"
                    alt=""
                  />
                  <div className="content mt-3">
                    <h4 className="title mb-0">{element.full_name}</h4>
                    <small className="text-muted">{element.job}</small>
                    <ul className="list-unstyled mt-3 social-icon social mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i className="mdi mdi-facebook" title="Facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i  className="mdi mdi-instagram" title="Instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i className="mdi mdi-twitter" title="Twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i className="mdi mdi-google-plus" title="Google +" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i className="mdi mdi-linkedin" title="Linkedin" />
                        </a>
                      </li>
                    </ul>
                    {/*end icon*/}
                  </div>
                </div>
              </div>
            ))}

            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </>
    </div>
  );
};
