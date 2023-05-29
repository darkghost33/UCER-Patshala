import React from "react";
import Navbar from "../../components/Navbar";

export default function ThreeSectionPage() {
  return (
    <>
      <div>
        <Navbar menuItems={["Home", "About", "WebCode", "Contact"]}
        loginText="Welcome User"></Navbar>
      </div>
      <div
        className="container-fluid"
        style={{ height: "100vh", marginTop: "70px" }}
      >
        <div className="row h-100">
          <div className="col-4">
            <a href="/card1" className="card h-100 position-relative">
              <div
                className="card-img d-flex align-items-center justify-content-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                  // backgroundSize: "cover",
                  filter: "brightness(50%)",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body position-absolute h-100 w-100 text-center d-flex flex-column align-items-center justify-content-center"
                
              >
                <h5 className="card-title text-white mb-0">Materials</h5>
                <p className="card-text text-white">Notes, Pdfs etc. are here</p>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a href="/card1" className="card h-100 position-relative">
              <div
                className="card-img d-flex align-items-center justify-content-center"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-vector/brain-sides-concept-illustration_114360-12045.jpg?w=740&t=st=1685296999~exp=1685297599~hmac=54992180d3b5857cbb9ef3953425385ae0fcedd9cc040b6a29696430d2386a31')",
                  // backgroundSize: "cover",
                  filter: "brightness(40%)",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body position-absolute h-100 w-100 text-center d-flex flex-column align-items-center justify-content-center"
                
              >
                <h5 className="card-title text-white mb-0">Aptitude</h5>
                <p className="card-text text-white">Question papers,solutions for aptitude are here</p>
              </div>
            </a>
          </div>
          <div className="col-4">
            <a href="/card1" className="card h-100 position-relative">
              <div
                className="card-img d-flex align-items-center justify-content-center"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/handshake-businessmen_1098-742.jpg?w=1060&t=st=1685297186~exp=1685297786~hmac=df93dc23b57f1f2c9b78a17865c687c8fffdfd70df9c508d56d1b3aa61325b93')",
                  backgroundSize: "cover",
                  filter: "brightness(50%)",
                  height: "100%",
                //   objectFit: "cover",
                }}
              />
              <div
                className="card-body position-absolute h-100 w-100 text-center d-flex flex-column align-items-center justify-content-center"
                
              >
                <h5 className="card-title text-white mb-0">Placement</h5>
                <p className="card-text text-white">Placement related content is here</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
