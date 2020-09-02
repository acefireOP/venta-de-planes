import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import Step3Plan from "./Step3Plan";
import FrequentQuestions from "./FrequentQuestions";
import styled from "styled-components";
import IconEmail from "../images/formulario/icon_email.svg";
import IconLight from "../images/icon_light_bulb.svg";
import RadiusContentWrapper from "./RadiusContentWrapper";

const FinalSummary = styled.div`
  .summary-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px dashed #d4c6c6;
    padding-bottom: 20px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .summary-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      color: #381451;
      @media (max-width: 480px) {
        margin-bottom: 10px;
        color: #76489b;
      }
    }
    .summary-number {
      font-size: 16px;
      line-height: 20px;
      color: #7c6c8a;
      span {
        color: #381451;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
  .summary-body {
    width: 100%;
    max-width: 690px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
    .summary-step {
      a {
        text-decoration: none;
      }
      width: 60%;
      margin-top: 30px;
      @media (max-width: 640px) {
        width: 100%;
        max-width: 280px;
      }
      h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #381451;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
        color: #381451;
        margin-bottom: 20px;
        text-align: justify;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      button {
        width: 100%;
        max-width: 300px;
        display: block;
        margin: 40px auto 0;
        background-color: #e92070;
        border-radius: 8px;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        padding: 14px 20px;
        border: none;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        &:hover {
          background-color: #8e1344;
        }
      }
    }
  }
  .summary-alert {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    img {
      margin-right: 10px;
      @media (max-width: 480px) {
        margin: 0 auto 10px;
      }
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: #e92070;
      @media (max-width: 480px) {
        text-align: center;
      }
    }
  }
`;

const Step4 = () => {
  const { formData, setFormData } = useContext(FormContext);
  useEffect(() => {
    switch (formData.planType) {
      case "lineaNueva":
        window.fbq("track", "Portate_Lineanueva_P4CompleteRegistration");
        break;
      case "portabilidad":
        window.fbq("track", "Portate_Portate_P4CompleteRegistration");
        break;
    }
    setFormData({ ...formData, successFlow: true });
    window.scrollTo(0, 0);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'solicitud-exitosa'
    });
  }, []);
  return (
    <FinalSummary>
      <RadiusContentWrapper>
        <div className="wrapper-summary">
          <div className="summary-header">
            <h2 className="summary-title">Resumen de tu solicitud</h2>
          </div>
          <div className="summary-body">
            <Step3Plan />
            <div className="summary-step">
              <h2>
                <img src={IconEmail} alt="sig paso" /> Siguiente paso
              </h2>
              <p>
                Te enviaremos un correo electrónico informando si tu solicitud
                fue aprobada y los plazos de entrega de tu nuevo Chip.
              </p>
              <p>
                Revisa tu bandeja de correo en las próximas 12 horas hábiles.
              </p>
              <a href="http://www.wom.cl">
                <button>volver a WOM.CL</button>
              </a>
            </div>
          </div>
        </div>
        <div className="summary-alert">
          <img src={IconLight} alt="light" />
          <p>
            Recuerda que, si tu solicitud es aprobada, solo el titular puede
            recibir el chip ya que tiene que firmar el contrato físico. Debes
            tener a mano tu cédula de identidad.
          </p>
        </div>
      </RadiusContentWrapper>

      <FrequentQuestions />
    </FinalSummary>
  );
};

export default Step4;
