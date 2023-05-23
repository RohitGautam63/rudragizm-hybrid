import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section class="my-5">
        <div class="text-center">
          <h1>About Us</h1>
          <hr class="w-25 mx-auto" />
        </div>

        <div class="container my-5">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 col-xxl-6">
              <figure>
                <img
                  src="./Rohit-Gautam.jpg"
                  className="img-fluid about-img"
                  alt="img"
                />
              </figure>
            </div>

            <div class="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>ROHIT GAUTAM</h1>
                <hr class="w-75 mx-auto" />
                <div style={{ textAlign: "left" }}>
                  <b>ROHIT GAUTAM </b> is registered with Ministry of Corporate
                  Affair(MCA) having DIN/PAN <b>10120364</b>.
                  <br /> <br />
                  ROHIT GAUTAM is director/partner/authorized signatory in 2
                  active company or LLP.
                </div>
              </div>
            </div>
          </div>
          <hr class="w-100 " />

          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>SHRUTI GULATI</h1>
                <hr class="w-75 mx-auto" />
                <div style={{ textAlign: "left" }}>
                  <b>SHRUTI GULATI </b> is registered with Ministry of Corporate
                  Affair(MCA) having DIN/PAN <b>10120363</b>.
                  <br /> <br />
                  SHRUTI GULATI is director/partner/authorized signatory in 1
                  active company or LLP.
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 col-xxl-6">
              <figure>
                <img
                  src="./Shreya-Gulati.jpg"
                  className="img-fluid about-img"
                  alt="img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
