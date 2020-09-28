import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PlanArrow from "../images/arrow_2.svg";
import { FormContext } from "../context/FormContext";
import Plan10gb from "../images/planes/plan-10-gigas.svg";
import Plan20gb from "../images/planes/plan-20-gigas.svg";
import Plan40gb from "../images/planes/plan-40-gigas.svg";
import Plan60gb from "../images/planes/plan-60-gigas.svg";

const RequestContainer = styled(motion.div)`
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 9;
  .request-heading {
    width: 230px;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    right: auto;
    bottom: 0;
    left: -134px;
    margin: auto;
    height: 37px;
    background-color: #76489b;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      color: #ffffff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }
    img {
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .request-plan {
    box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
    border-radius: 8px;
    background-color: #ffffff;
  }
`;

const RequestPlan = () => {
  const { formData } = useContext(FormContext);
  const [open, setOpen] = useState(true);

  const variantsOpen = {
    open: {
      transform: "translateX(0%)",
      transition: { duration: 0.3 },
    },
    close: {
      transform: "translateX(100%)",
      transition: { duration: 0.3 },
    },
  };
  // if(window.location.pathname!=='/'){
  //   return(
  //       <div></div>
  //   )
  // }

  if (formData.selectedPlan !== undefined) {
    return (
      <RequestContainer
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div className="request-heading" onClick={() => setOpen(!open)}>
          <p>estás solicitando...</p>
          <img className={!open ? "active" : ""} src={PlanArrow} alt="arrow" />
        </div>
        <div className="request-plan">
          {formData.selectedPlan === undefined && (
            <img src={Plan10gb} alt="plan 10 gb" />
          )}
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
      </RequestContainer>
    );
  } else {
    return <div></div>;
  }
};

export default RequestPlan;
