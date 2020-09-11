import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col-md-4 col-12 text-center mb-md-0 mb-3">
            <blockquote className="blockquote mb-0 text-center">
              <p className="mb-0">GG2EZ</p>
              <div className="blockquote-footer">
                Everybody at some point, probably.
              </div>
            </blockquote>
          </div>
          <div className="col-md-4 col-12 mb-md-0 mb-3">
            <div className="text-center">
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/jctiru/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fa-lg white-text mx-4"> </i>
              </a>
              {/* Github */}
              <a
                href="https://github.com/jctiru/gamewatch-frontend"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-lg white-text mx-4"> </i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            © 2020 Copyright: GameWatch
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
