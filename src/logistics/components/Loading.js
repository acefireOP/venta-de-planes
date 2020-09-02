import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LoadingLogo from '../images/UnionloadingLogo.png'

const LoadingWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 99;
    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 200px;
    }
    .text {
        margin-top: 50px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 33.531px;
        line-height: 42px;
        color: #7C6C8A;
    }
    .loadingDotWrapper {
        display: flex;
        align-items: center;
        div {
            margin-right: 12px;
            width: 13px;
            height: 13px;
            border-radius: 7px;
            background: #B3A6BA;
            &.active{
                width: 16px;
                height: 16px;
                border-radius: 8px;
                background: #7C6C8A;
            }
            &:last-of-type {
                margin-right: 0;
            }
        }
    }
`;


export default function Loading(WrappedComponent) {
    return class Loading extends React.Component {
        state = {
            count: 0,
            loading: false
        };
        loadingNum = [0, 0, 0];
        timer = null;

        componentDidUpdate(prevProps, prevState, snapshot) {
            const {loading} = this.state;
            const {prevLoading} = prevState;
            if(!prevLoading && loading) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }, 1000);
            }
            if(prevLoading && !loading) {
                clearInterval(this.timer)
            }
        }

        setLoadingState = (status) => {
            this.setState({
                loading: status
            });
            if(status) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }, 1000);
            }else{
                clearInterval(this.timer)
            }
        };

        componentWillUnmount() {
            clearInterval(this.timer)
        }

        render() {
            const {count, loading} = this.state;
            return (
                <>
                    {loading &&
                    <LoadingWrapper>
                        <div className={"content"}>
                            <img src={LoadingLogo} alt="logo"/>
                            <div className={"text"}>CARGANDO</div>
                            <div className={"loadingDotWrapper"}>
                                {this.loadingNum.map((item, index) => {
                                    return (<div key={index} className={count % 3 === index ? 'active' : undefined}/>)
                                })}
                            </div>
                        </div>
                    </LoadingWrapper>}
                    <WrappedComponent {...this.props} loading={loading} setLoadingState={this.setLoadingState}/>
                </>
            )
        }
    }
}
