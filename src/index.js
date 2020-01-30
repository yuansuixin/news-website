import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Layout } from 'antd';
import AppHeader from './components/Header/';

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{minWidth:1600}}>
                <Header className="header">
                    <AppHeader></AppHeader>
                </Header>
                <Content className="content">Content</Content>
                <Footer className="footer">Footer</Footer>
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
