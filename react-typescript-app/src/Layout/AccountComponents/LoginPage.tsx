import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"

class LoginPage extends Component {

    login = () => {

    }

    render() {
        return (
            <div className="account-login font-center">
                <p className="font-mediumlarge font-bold font-smallmargin">Вход</p>
                <p className="font-mediumsmall font-smallmargin"> Для входа на сайт используйте введённый Вами при регистрации e-mail. </p>
                <div className="account-box">
                    <div className="account-element">
                        <p className="font-mediumsmall">Логин: </p>
                        <input/>
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall">Пароль: </p>
                        <input/>
                    </div>
                </div>
                <EventButton
                    content = "Войти"
                    eventname = {() => this.login()}
                />
            </div>
        )
    }
}

export default LoginPage;