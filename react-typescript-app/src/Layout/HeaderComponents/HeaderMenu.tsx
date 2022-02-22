import { Component } from "react";
import "./HeaderStyles.css";

import {HeaderMenuButton} from '../ButtonComponents/HeaderMenuButton' 

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu-main">
                <HeaderMenuButton
                    content="Главная"
                    refto="/"
                />
                <HeaderMenuButton
                    content="Об астрономии"
                    refto="/astronomy"
                />
                <HeaderMenuButton
                    content="Об астрофизике"
                    refto="/astrophysics"
                />
                <HeaderMenuButton
                    content="Интернет-магазин"
                    refto="/shop"
                />
            </div>
        )
    }
}

export default HeaderMenu;