import { Component } from "react";
import "./HeaderStyles.css"

import { HeaderMainButton } from "../ButtonComponents/HeaderMainButton";

class HeaderMainComponent extends Component {

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
                    <h1 className="font-white font-center font-large"> Astroshop! </h1>
                </div>
            </div>
        )
    }
}

export default HeaderMainComponent;