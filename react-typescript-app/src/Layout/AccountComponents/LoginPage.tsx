import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"
import accountfilter from "./AccountFilter";

class LoginPage extends Component {

    email:                  string
    emailIsCorrect:         boolean

    password:               string
    passIsCorrect:          boolean

    constructor (props: any) {

        super(props)

        //param             value
        this.email          = ""
        this.emailIsCorrect = true

        this.password       = ""
        this.passIsCorrect  = true

    }

    onChangeParametersHandler = (field: string, value: string) => {
        switch (field) 
        {
            case "email":
                this.email = value  
            break;

            case "password":
                this.password = value
            break;
    
            default: break;
        }
    }

    async login () {
        this.setState(
            () => this.emailIsCorrect = !accountfilter(this.email)
        )
        this.setState(
            () => this.passIsCorrect = !accountfilter(this.password)
        )
        return await 0;
    }

    render() {
        return (
            <div className="account-login font-center">
                <p className="font-mediumlarge font-bold font-smallmargin">Вход</p>
                <p className="font-mediumsmall font-smallmargin"> Для входа на сайт используйте введённый Вами при регистрации e-mail. </p>
                <div className="account-box">
                    <div className="account-element">
                        <p className="font-mediumsmall font-nomargin">Логин: </p>
                        <div className={this.emailIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Логин введён неверно.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("email", event.target.value)}}
                        />
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall font-nomargin">Пароль: </p>
                        <div className={this.passIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Пароль не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("password", event.target.value)}}
                        />
                    </div>
                </div>
                <EventButton
                    content = "Войти"
                    eventname = {async () => {
                        await this.login()
                        if (this.emailIsCorrect && this.passIsCorrect) {
                            await console.log("Req");
                        }
                    }}
                />
            </div>
        )
    }
}

export default LoginPage;