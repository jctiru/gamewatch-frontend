import React from "react";

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card border-dark">
            <div className="card-body">
              <h2 className="card-title text-dark">About and Disclaimer</h2>
              <div className="card-text text-dark">
                <p>
                  This simple website/project is created as a practice/exercise
                  for full-stack WebDev using microservices architecture and
                  solely for educational purposes. Almost all resources used are
                  from the internet. The project's main theme is Game
                  Information and News{" "}
                  <strong>
                    <em>but some sections may or may not</em>
                  </strong>{" "}
                  adhere to the whole theme.
                </p>
                <p>
                  <strong>
                    <em>
                      Disclaimer: No copyright infringement is intended. This is
                      only for educational purposes and not for profit. Most
                      asset/s used are not owned by the developer/s unless
                      otherwise stated; the credit goes to the owner/s.
                    </em>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
