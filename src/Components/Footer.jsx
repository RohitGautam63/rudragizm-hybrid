import React from "react";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <div class="footer-basic">
        <footer>
          <h3 style={{ textAlign: "center" }}>Contact us </h3>
          <div class="social">
            <a href="https://www.instagram.com/_seulpandit08/">
              <InstagramIcon
                style={{ color: "#fff" }}
                className="icon ion-social-instagram"
              />
            </a>
            <a href="https://www.linkedin.com/in/rohit-gautam-23696a228/">
              <LinkedInIcon
                style={{ color: "#fff" }}
                className="icon ion-social-snapchat"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007060875597">
              <FacebookIcon
                style={{ color: "#fff" }}
                className="icon ion-social-twitter"
              />
            </a>
            <br />
            <div className="foot-email">
              <EmailIcon
                style={{ color: "#fff" }}
                className="icon ion-social-twitter"
              />{" "}
              <nbsp />
              Info.rudragizmhybrid.pvt.ltd@gmail.com
            </div>
          </div>
        </footer>
              
      </div>
    </>
  );
};

export default Footer;
