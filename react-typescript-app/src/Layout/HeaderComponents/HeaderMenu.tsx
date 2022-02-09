import { Component } from "react";
import "./HeaderStyles.css";

import {HeaderMenuButton} from '../ButtonComponents/HeaderMenuButton' 

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu-main">
                <HeaderMenuButton
                    content="Главная"
                    hrefname="/"
                />
                <HeaderMenuButton
                    content="Об астрономии"
                    hrefname="/astronomy"
                />
                <HeaderMenuButton
                    content="Об астрофизике"
                    hrefname="/astrophysics"
                />
                <HeaderMenuButton
                    content="Интернет-магазин"
                    hrefname="/shop"
                />
            </div>
        )
    }
}

export default HeaderMenu;