import React from "react";
import { SpinnerContainer } from "./style";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;
