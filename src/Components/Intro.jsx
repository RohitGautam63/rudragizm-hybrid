import react from "react";
import "./intro.css";

function Intro() {
  return (
    <>
      <div className="CompanyAbout">
        <h1 className="companyName">RUDRAGIZM HYBRID EV VEHICLE PVT LTD</h1>
        <div className="secondaryText">
          The company has two directors/key management personal
        </div>
        <h2 className="directorName">Rohit Gautam & Shruti Gulati</h2>
        <div className="secondaryText">
          The Registration number of the company is: <strong>180231</strong>
        </div>
        <div className="secondaryText">
          Corporate Identification Number(CIN) provided from MAC is:      
          <strong>U29109UP2023PTC180231</strong>
        </div>
      </div>
      <div className="introContainer">
        <div className="introPara">
          We propose a modification for the existing internal combustion
          engine-powered scooter (referred to as "Scotty") available in the
          market. Our plan involves integrating a Brushless Direct Current
          (BLDC) hub motor in a specific location where space is limited,
          ensuring a seamless connection between the motor and the wheels.
        </div>
        <div className="introPara">
          To achieve this, we will incorporate the BLDC hub motor alongside the
          existing internal combustion engine in a parallel connection. This
          arrangement will allow the driver to switch between using petrol fuel
          and battery power by means of a switch conveniently accessible during
          operation. The battery itself will be securely placed in the trunk of
          the scooter.
        </div>
        <div className="introPara">
          To monitor the temperature within the trunk, we will install a
          temperature sensing unit. This unit will detect any rise in
          temperature caused by the motor's operation and trigger an alarm on
          the modern display located on the scooter's handle. This display will
          provide essential information, such as battery status and other useful
          details.
        </div>
        <div className="introPara">
          Additionally, as part of this modification, we will attach a gear
          mechanism to the hub motor. This gear will facilitate the motion of
          the internal combustion engine, which will continue to drive the rear
          wheel of the scooter.
        </div>
        <div className="introPara">
          In summary, our proposal aims to enhance the existing Scotty scooter
          by integrating a BLDC hub motor alongside the internal combustion
          engine. This modification will enable the scooter to operate in either
          petrol or battery mode, with a seamless switching mechanism. We will
          also incorporate a temperature sensing unit in the trunk to monitor
          motor-generated heat, triggering an alarm on the handle's modern
          display. Furthermore, the gear mechanism will ensure the motion of the
          internal combustion engine transfers to the rear wheel.
        </div>
      </div>
    </>
  );
}

export default Intro;
