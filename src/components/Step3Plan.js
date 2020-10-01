import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import Plan10gb from "../images/planes/plan-10-gigas.svg";
import Plan20gb from "../images/planes/plan-20-gigas.svg";
import Plan40gb from "../images/planes/plan-40-gigas.svg";
import Plan60gb from "../images/planes/plan-60-gigas.min.svg";

const PlanRequested = styled.div`
  margin-right: 60px;
  h2 {
    color: #7c6c8a;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  img {
    border-radius: 5px;
    box-shadow: 0px 0px 14px rgba(56, 20, 81, 0.25);
  }
  .planImage {
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const Step3Plan = () => {
  const { formData } = useContext(FormContext);
  return (
    <PlanRequested>
      <h2>Plan Solicitado</h2>
      <div className="planImage">
        {formData.selectedPlan === "10gb" && (
          <img src={Plan10gb} alt="plan 10 gb" />
        )}
        {formData.selectedPlan === "20gb" && (
          <img src={Plan20gb} alt="plan 20 gb" />
        )}
        {formData.selectedPlan === "40gb" && (
          <img src={Plan40gb} alt="plan 40 gb" />
        )}
        {formData.selectedPlan === "60gb" && (
          <img src={Plan60gb} alt="plan 60 gb" />
        )}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
