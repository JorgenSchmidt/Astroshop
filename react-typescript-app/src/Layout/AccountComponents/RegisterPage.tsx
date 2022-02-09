import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"

class RegisterPage extends Component {

    register = () => {

    }

    render() {
        return (
            <div className="account-register font-center">
                <p className="font-mediumlarge font-bold font-smallmargin">Регистрация</p>
                <div className="account-box">
                    <div className="account-element">
                        <p className="font-mediumsmall">Имя: </p>
                        <input/>
                        <p className="font-mediumsmall">Отчество: </p>
                        <input/>
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall">Фамилия: </p>
                        <input/>
                        <p className="font-mediumsmall">*Гражданство: </p>
                        <input/>
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall">Пароль: </p>
                        <input/>
                        <p className="font-mediumsmall">Повторите пароль: </p>
                        <input/>
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall">E-mail: </p>
                        <input/>
                        <p className="font-mediumsmall">*Телефон: </p>
                        <input/>
                    </div>
                </div>
                <EventButton
                    content = "Зарегистрироваться"
                    eventname = {() => this.register()}
                />
                <p className="font-small font-justify"> * - необязательные параметры, необходимы исключительно для заказа продукции. Наример для отсылки СМС-сообщений со статусом доставки заказа. Писать комментарии и оставлять отзывы Вы можете без указания этих параметров.</p>
            </div>
        )
    }
}

export default RegisterPage;