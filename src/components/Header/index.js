import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import logo from './logo.png';
import './style.css';

class AppHeader extends Component {
    render() {
        return (
            <Fragment>
                <img src={logo} className="app-header-logo"></img>
                <Menu mode="horizontal" className="app-header-menu">
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        VOA慢速英语
            </Menu.Item>
                </Menu>
            </Fragment>

        )
    }
}
export default AppHeader;
