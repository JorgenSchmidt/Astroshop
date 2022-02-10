import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './AppStyles.css';

import HeaderMain from './HeaderComponents/HeaderMain'
import HeaderMenu from './HeaderComponents/HeaderMenu';

import FooterMain from './FooterComponents/FooterMain';
import FooterMenu from './FooterComponents/FooterMenu';

import { ErrorPage } from './MainComponents/ErrorPage';
import { MainPage } from './MainComponents/MainPage';
import { ContactsPage } from './MainComponents/ContactsPage';
import { FeedbacksPage } from './MainComponents/FeedbacksPage';

import LoginPage from './AccountComponents/LoginPage';
import RegisterPage from './AccountComponents/RegisterPage';
import RecoverPasswordPage from './AccountComponents/RecoverPasswordPage';

import ShopPage from './ShopComponents/ShopPage'
import ProductPage from './ShopComponents/ProductPage';

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
                            <Route path = "/contacts" element={<ContactsPage/>}/>
                            <Route path = "/feedbacks" element={<FeedbacksPage/>}/>

                            <Route path = "/login" element={<LoginPage/>}/>
                            <Route path = "/register" element={<RegisterPage/>}/>
                            <Route path = "/recoverpass" element={<RecoverPasswordPage/>}/>

                            <Route path = "/shop" element={<ShopPage/>}/>
                            <Route path = "/shop/:name" element = {<ProductPage/>}></Route>

                            <Route path = "/" element={<MainPage/>}/>
                            <Route path = "*" element={<ErrorPage/>}/>
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