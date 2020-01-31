import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./style.css";
import { Layout } from "antd";
import AppHeader from "./components/Header/";
import List from "./containers/List/";
import Detail from "./containers/Detail/";
import Login from './components/Login';
import Vip from './components/Vip';


const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1240, height: '100%' }}>
                    <Header className="header">
                        <AppHeader></AppHeader>
                    </Header>
                    <Content className="content">
                    <Login />     
                        {/* Switch是只匹配一个，匹配到就返回 */}
                        <Switch>
                            <Route path='/vip' component={Vip}></Route>
                            <Route path="/detail/:id" component={Detail}></Route>
                            <Route path="/:id?" component={List}></Route>
                        </Switch>

                    </Content>
                    <Footer className="footer">@copyright Carol 2020</Footer>
                </Layout>
            </BrowserRouter >
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
