import React from "react";
import {BrowserRouter as Router, withRouter, Switch, Route} from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";
import HeaderScene from "./components/HeaderScene";
import Footer from "./components/Footer";
import FooterScene from "./components/FooterScene";
import InputRUT from "./pages/InputRUT";
import OrderList from "./pages/OrderList";
import OrderInfo from "./pages/OrderInfo";
import CompeletedOrder from "./pages/CompletedOrder";
import Footer1 from "./components/Footer1";
import MobileFooter1 from "./components/MobileFooter1";


const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
}
html, ul{
  padding:0;
  margin:0;
}
*{
  box-sizing:border-box;
}
.grecaptcha-badge {
      display: none;
  }
#root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


class Content extends React.Component {
    state = {
        currentPath: '/'
    };

    static getDerivedStateFromProps(props, state) {
        return {
            currentPath: props.location.pathname
        }
    }

    render() {
        const {currentPath} = this.state;
        return (
            <>
                <GlobalStyle/>
                <HeaderScene/>
                <PageWrapper>
                    {/*<Router basename={`logistics`}>*/}
                        <Switch>
                            <Route exact path="/logistics/inputrut" component={InputRUT}/>
                            <Route path="/logistics/orderlist/:rut" component={OrderList}/>
                            <Route exact path="/logistics/orderInfo" component={CompeletedOrder}/>
                        </Switch>
                    {/*</Router>*/}
                </PageWrapper>
                <FooterScene/>
                <Footer/>
            </>
        )
    }
}

class App extends React.Component {
    render() {
        const ContentWrapper = withRouter(Content);

        return (
            <ContentWrapper/>
        );
    }
}

export default App;
