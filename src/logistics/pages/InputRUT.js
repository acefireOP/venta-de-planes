import React, {useEffect, useState} from "react";
import {
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import styled from "styled-components";
import IconRut from "../images/icon_rut.svg";
import InputItem from "../components/InputItem";
import {useHistory} from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import axios from "axios";
import {reCaptchaKeyServer, prodReCaptchaKeyServer, prodReCaptchaKey} from "../utils/const";
import Alerta from "../../images/icon_alerta.svg";
import firebase from "firebase";
import Loading from "../components/Loading";

const LogisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  align-self: center;
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #381451;
  }
  .description {
    padding: 0 12px;
    margin-top: 14px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #381451;
  }
  .inputWrapper {
    margin-top: 24px;
    width: 270px;
  }
 
`;

const ButtonWrap = styled.div`
  margin-bottom: 24px;
  width: 280px;
  border-radius: 8px;
  height: 44px;
  pointer-events: none;
  transition: background 0.5s ease;
  user-select: none;
  text-decoration: none;
  background: rgba(233, 32, 112, 0.2);
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
  &.active {
    background: #e92070;
    cursor: pointer;
    pointer-events: unset;
  }
 
`;

const TipWrapper = styled.div`
  display: flex;
  width: calc(100% - 120px);
  margin: 0 auto 9px;
  margin-top: ${props => props.hasOrder ? '-18px' : "10px"};
  padding: 8px;
  background: rgba(233, 172, 32, 0.1);
  border: 1px solid #e9ac20;
  box-sizing: border-box;
  border-radius: 4px;
 
  @media (max-width: 480px) {
    width: calc(100% - 40px);
    margin: -18px 20px 24px;
    margin-top: ${props => props.hasOrder ? '-18px' : "10px"};
    padding: 8px;
  }
  .alerta {
    height: 15px;
    margin-right: 8px;
  }
 
  .tips {
    font-size: 12px;
    line-height: 15px;
    color: #7c6c8a;
  }
`;

const ref = React.createRef()
const InputRut = (props) => {
    const history = useHistory();
    const [rut, setRut] = useState("");
    const [valid, setValid] = useState(true);
    const [hasOrder, setOrder] = useState(true);
    const {executeRecaptcha} = useGoogleReCaptcha();
    const setRutValue = (text) => {
        setRut(text)
    };
    const getOrderNum = () => {
        return new Promise((resolve, reject) => {
            firebase.firestore().collection("venta-planes").where("rut", "==", rut)
                .get()
                .then(function (querySnapshot) {
                    const orderList = [];
                    querySnapshot.forEach(function (doc) {
                        const order = {...doc.data(), id: doc.id};
                        const trackItems = order.trackingItems;
                        const temp = JSON.parse(JSON.stringify(trackItems || [])) || [];
                        if (temp.length !== 0) {
                            temp.sort((a, b) => {
                                return b.status - a.status
                            });
                            if (temp[0].status < 4) {
                                orderList.push(order);
                            } else {
                                const {fecha, hora} = temp[0];
                                const [day, month, year] = fecha.split('/');
                                console.log(new Date(`${year}/${month}/${day} ${hora}`).getTime())
                                const orderDate = new Date(`${year}/${month}/${day} ${hora}`).getTime();
                                const now = new Date().getTime();
                                if (now - orderDate < 15 * 24 * 60 * 60 * 1000) {
                                    orderList.push(order);
                                }
                            }
                        }
                        ;
                    });
                    resolve(orderList.length)
                })
                .catch(function (error) {
                    reject();
                    console.log("Error getting processing order: ", error);
                })
        })
    };

    const getInfo = () => {
        const valid = ref.current && ref.current.blurValidation();
        // setValid(valid);
        props.setLoadingState(true);
        if (valid) {
            // executeRecaptcha("query").then((token) => {
            //     axios.post(`/recaptcha/api/siteverify?secret=${process.env.NODE_ENV !== 'development' ? prodReCaptchaKeyServer : reCaptchaKeyServer}&response=${token}`).then((data) => {
            //         console.log(data);
            //         const {data: {success, score}} = data;
            //         if (success && score > 0.5) {
                        getOrderNum().then((num) => {
                            setOrder(num !== 0);
                            console.log('=======')
                            setValid(num !== 0);
                            if (num !== 0) {
                                history.push({
                                    pathname: `/logistics/orderlist/${encodeURI(rut)}`,
                                });
                            } else {
                                ref.current && ref.current.setInvalidForm(2);
                                ref.current && ref.current.setErrorMessage("No hemos encontrado una compra asociada a este RUT")
                            }
                        }).catch((e) => {
                            setOrder(false)
                            console.log('++++++++', e)
                        }).finally(() => {
                            props.setLoadingState(false);
                        });
                    // } else {
                    //     props.setLoadingState(false);
                    //     console.log('google say you are junk robot')
                    // }
                // });
            // }).catch((e)=>{
            //     console.log(e)
            // });
        }
    };

    const Tips = ({hasOrder}) => {
        return (
            <TipWrapper hasOrder={hasOrder}>
                <img className="alerta" src={Alerta} alt="vector"/>
                <div>
                    <div className="tips">Por el momento no hemos encontrado una compra asociada a este RUT. Vuelve a
                        intentarlo más tarde.
                    </div>
                    <div className="tips">Nuestro tracking se habilitará dentro de 24 hrs desde tu compra.</div>
                    <a className="router"/>
                </div>
            </TipWrapper>
        )
    };

    return (
        <>
            <Header/>
            <PageWrapper>
                <LogisticsWrapper>
                    <h2>¡Hola Womer!</h2>
                    <div className={'description'}>Ingresa a continuación tu Rut para saber el estado de tu solicitud.
                    </div>
                    <div className={'inputWrapper'}>
                        <InputItem
                            ref={ref}
                            onBlur={(valid = true) => {
                                setValid(valid)
                                console.log('***********')
                                setOrder(true)
                            }}
                            onChange={setRutValue}
                            nameInput="rut"
                            iconInput={IconRut}
                            nameLabel="Rut"
                            length="12"
                            errorInfo={"Ingresa un RUT válido"}
                        />
                    </div>

                    {!hasOrder && (
                        <Tips hasOrder={hasOrder}/>
                    )}

                    <ButtonWrap
                        data-sitekey="reCAPTCHA_site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                        onClick={getInfo}
                        className={`${rut.trim() !== '' && valid && 'active'} `}
                    >VER ESTADO</ButtonWrap>
                </LogisticsWrapper>
            </PageWrapper>
        </>
    );
};

export default Loading(InputRut);