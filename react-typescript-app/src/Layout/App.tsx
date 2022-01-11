import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './AppStyles.css';

import HeaderMain from './HeaderComponents/HeaderMain'
import HeaderMenu from './HeaderComponents/HeaderMenu';

import FooterMain from './FooterComponents/FooterMain';
import FooterMenu from './FooterComponents/FooterMenu';


class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <HeaderMain/>
                    <HeaderMenu/>
                </div>
                <div className="main-main">
                    <div className="main-routes">
                        <Routes>
                            <Route path = "/" element={<p>Main</p>}></Route>
                            <Route path = "*" element={<p>Error 404!</p>}/>
                        </Routes>
                    </div>
                </div>
                <div className="main-footer">
                    <FooterMenu/>
                    <FooterMain/>
                </div>
            </div>
        )
    }
}

export default App;