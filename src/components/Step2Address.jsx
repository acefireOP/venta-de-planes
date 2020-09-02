import React, { useState, useEffect } from "react";
import axios from "axios";
import InputItem from "./InputItem";
import InputSelectRegiones from "./InputSelectRegiones";
import InputSelectComunas from "./InputSelectComunas";
import styled from "styled-components";
import IconUbic from "../images/icon_ubicacion.svg";

const FormAdress = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  .select-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #7c6c8a;
  }
`;

const Step2Adress = ({
  regionName,
  comunaName,
  addressNameStreet,
  addressName,
  addressNumName,
  disabledFields = false,
  showparty = 0,
}) => {
  const [regionsList, setRegionsList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://1701336841.rsc.cdn77.org/json/regiones-comunas-elockers-matrix.json"
      )
      .then((res) => {
        setRegionsList(res.data.regiones);
      })
      .then(() => {
        setLoaded(true);
      });
  }, []);

  /*const blockPaste = (e) => {
    e.preventDefault();
    return false;
  }*/

  return (
    <FormAdress>
      {(showparty === 0 || showparty === 1) && (
        <>
          <p className="select-title">Región</p>
          <InputSelectRegiones
            classAdd="full-width full-border"
            regionsList={regionsList}
            fieldName={regionName}
            comunaName={comunaName}
            disabledFields={disabledFields}
            loaded={loaded}
          />
          <p className="select-title">Comuna</p>
          <InputSelectComunas
            classAdd="full-width full-border"
            regionsList={regionsList}
            loaded={loaded}
            fieldName={comunaName}
            comunaName={comunaName}
            regionField={regionName}
            disabledFields={disabledFields}
          />
        </>
      )}
      {(showparty === 0 || showparty === 2) && (
        <>
          <InputItem
            classAdd="full-width"
            nameInput={addressNameStreet}
            iconInput={IconUbic}
            nameLabel="Calle"
            disabledFields={disabledFields}
            length="50"
            exampleInput="Ej: Avenida Providencia"
          />
          <InputItem
            classAdd="full-width"
            nameInput={addressName}
            //iconInput={IconUbic}
            nameLabel="Número"
            disabledFields={disabledFields}
            length="50"
            exampleInput="Ej: 1100"
            fieldType="number"
          />
          <InputItem
            classAdd="full-width"
            nameInput={addressNumName}
            // iconInput={IconUbic}
            nameLabel="Depto / oficina / otro"
            disabledFields={disabledFields}
            length="50"
            exampleInput="Ej: Depto 33 ó Casa 33"
          />
        </>
      )}
    </FormAdress>
  );
};

export default Step2Adress;
