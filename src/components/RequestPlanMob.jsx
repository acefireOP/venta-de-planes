import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PlanArrow from "../images/arrow_2.svg";
import { FormContext } from "../context/FormContext";
import Plan15gb from "../images/planes/plan15gb.svg";
import Plan30gb from "../images/planes/plan30gb.svg";
import Plan40gb from "../images/planes/plan40gb.svg";

const RequestContainerMob = styled(motion.div)`
  width: 96%;
  margin-bottom: 8px;
  .request-heading {
    height: 44px;
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
      transition: transform 0.3s;
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .allRadius {
    border-radius: 8px;
  }
  .request-plan {
    background-color: #ffffff;
    border-radius: 0px 0px 8px 8px;
    .container-imgplan {
      padding: 20px;
      img {
        display: block;
        margin: 0 auto;
        box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
        border-radius: 8px;
      }
    }
  }
`;

const RequestPlanMob = () => {
  const { formData } = useContext(FormContext);
  const [open, setOpen] = useState(true);

  const variantsOpen = {
    open: {
      maxHeight: 500,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    close: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <RequestContainerMob>
      <div
        className={!open ? "allRadius request-heading" : "request-heading"}
        onClick={() => setOpen(!open)}
      >
        <p>estás solicitando...</p>
        <img className={open ? "active" : ""} src={PlanArrow} alt="arrow" />
      </div>
      <motion.div
        className="request-plan"
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div className="container-imgplan">
          {formData.selectedPlan === undefined && (
            <img src={Plan15gb} alt="plan 15 gb" />
          )}
          {formData.selectedPlan === "15gb" && (
            <img src={Plan15gb} alt="plan 15 gb" />
          )}
          {formData.selectedPlan === "30gb" && (
            <img src={Plan30gb} alt="plan 30 gb" />
          )}
          {formData.selectedPlan === "40gb" && (
            <img src={Plan40gb} alt="plan 40 gb" />
          )}
        </div>
      </motion.div>
    </RequestContainerMob>
  );
};

export default RequestPlanMob;
