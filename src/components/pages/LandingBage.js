import React from "react";
import edcImage from "../images/edc.JPG";
const LandingBage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>EDC home page</h1>
      <img src={edcImage} alt="logo" style={{ width: "700px" }} />
    </div>
  );
};

export default LandingBage;
