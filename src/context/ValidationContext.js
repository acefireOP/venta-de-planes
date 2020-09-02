import React, { createContext, useState } from 'react'

export const ValidationContext = createContext();
const ValidationContextProvider = (props) => {
  const [validationData, setValidationData] = useState({
    rut: false,
    ci: false,
    name: false,
    lastName: false,
    phone: false,
    email: false,
    phoneToMigrate: false,
    originCompany: false,
    originPlanType: false,
    previousCarrier:false,
    contractRegion:false,
    contractComuna:false,
    dispatchRegion:false,
    dispatchComuna:false,
    contractAddressStreet:false,
    contractAddress:false,
    contractAddressNum:false,
    dispatchAddressStreet:false,
    dispatchAddress:false,
    dispatchAddressNum:false,
  })

  return(
    <ValidationContext.Provider value={{validationData,setValidationData}}>
      {props.children}
    </ValidationContext.Provider>
  )
}
export default ValidationContextProvider