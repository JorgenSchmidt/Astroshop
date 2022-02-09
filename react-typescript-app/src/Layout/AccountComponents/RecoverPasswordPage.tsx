import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"

class RecoverPasswordPage extends Component {

    recover = () => {

    }

    render() {
        return (
            <div className="account-recoverpass font-center">
                <p className="font-mediumlarge font-bold font-smalllargemargins">Восстановить пароль</p>
                <p className="font-mediumsmall font-smallmargin"> Для восстановления пароля введите имейл, на который был зарегистрирован аккаунт и мы вышлем туда письмо со ссылкой на восстановление страницы. </p>
                <div className="account-box">
                    <div className="account-element">
                        <p className="font-mediumsmall">E-mail: </p>
                        <input/>
                    </div>
                </div>
                <EventButton
                    content = "Выслать письмо"
                    eventname = {() => this.recover()}
                />
            </div>
        )
    }
}

export default RecoverPasswordPage;