import { Component } from "react";
import "./HeaderStyles.css"

import { HeaderMainButton } from "../ButtonComponents/HeaderMainButton";

class HeaderMain extends Component {

    callWindow = () => {
        console.log("Q");
    }

    render() {
        return (
            <div className="header-main">
                <div className="header-main-higher">
                    <HeaderMainButton
                        content = "Войти"
                        eventname = {() => this.callWindow()}
                    />
                    <HeaderMainButton
                        content = "Зарегистрироваться"
                        eventname = {() => this.callWindow()}
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