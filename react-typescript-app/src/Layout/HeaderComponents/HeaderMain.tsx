import { Component } from "react";
import "./HeaderStyles.css"

import { HeaderMainButton } from "../ButtonComponents/HeaderMainButton";

class HeaderMain extends Component {

    render() {
        return (
            <div className="header-main">
                <div className="header-main-higher">
                    <HeaderMainButton
                        content = "Войти"
                        refto="/login"
                    />
                    <HeaderMainButton
                        content = "Зарегистрироваться"
                        refto="/register"
                    />
                </div>
                <div className="header-main-lower">
                    <p className="font-white font-bold font-center font-large"> Astroshop!</p>
                </div>
            </div>
        )
    }
}

export default HeaderMain;