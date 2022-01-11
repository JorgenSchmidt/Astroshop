import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './AppStyles.css';

import HeaderMainComponent from './HeaderComponents/HeaderMainComponent'
import HeaderMenu from './HeaderComponents/HeaderMenu';

class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <HeaderMainComponent/>
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
                <div className="main-footer"></div>
            </div>
        )
    }
}

export default App;