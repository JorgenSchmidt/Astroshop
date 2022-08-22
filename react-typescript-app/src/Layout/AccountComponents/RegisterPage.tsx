import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"
import { ToRegisterReducer } from "../GlobalStorage/AccountStorage/AccountReducers";
import UserObject from "../GlobalStorage/AccountStorage/AccountStorage";
import { filter } from "../Services/StringFilter";

class RegisterPage extends Component {

    name:                   string
    nameIsCorrect:          boolean

    nick:                   string
    nickIsCorrect:          boolean

    secname:                string
    secnameIsCorrect:       boolean

    surname:                string
    surnameIsCorrect:       boolean

    citizenship:            string
    citizenshipIsCorrect:   boolean

    email:                  string
    emailIsCorrect:         boolean

    password:               string
    passIsCorrect:          boolean
    
    passAgain:              string
    passAgainIsCorrect:     boolean

    phone:                  string
    phoneIsCorrect:         boolean

    passAreSimilary:        boolean

    constructor (props: any) {

        super(props)

        //param                     value
        this.name                   = ""
        this.nameIsCorrect          = true

        this.nick                   = ""
        this.nickIsCorrect          = true

        this.secname                = ""
        this.secnameIsCorrect       = true

        this.surname                = ""
        this.surnameIsCorrect       = true

        this.citizenship            = ""
        this.citizenshipIsCorrect   = true

        this.email                  = ""
        this.emailIsCorrect         = true

        this.password               = ""
        this.passIsCorrect          = true

        this.passAgain              = ""
        this.passAgainIsCorrect     = true

        this.phone                  = ""
        this.phoneIsCorrect         = true

        this.passAreSimilary        = true

    }

    // for immitation some WPF features on site
    onChangeParametersHandler = (field: string, value: string) => {
        switch (field) 
        {
            case "name":
                this.name = value
            break;

            case "nick":
                this.nick = value
            break;
            
            case "secname":
                this.secname = value
            break;

            case "surname":
                this.surname = value
            break;

            case "citizenship":
                this.citizenship = value
            break;

            case "email":
                this.email = value  
            break;

            case "password":
                this.password = value
            break;

            case "passagain":
                this.passAgain = value
            break

            case "phone":
                this.phone = value
            break;
    
            default: break;
        }
    }

    async register () {
        if (this.checkparams()) {
            await ToRegisterReducer(
                new UserObject (
                    this.name,
                    this.nick,
                    this.secname,
                    this.surname,
                    this.citizenship,
                    this.email,
                    this.password,
                    "", 
                    this.phone,
                    0
                )
            );
        }
        return await 0;
    }

    async correctparams () {
        await this.setState(
            () => this.nameIsCorrect = !filter(this.name)
        )
        await this.setState(
            () => this.nickIsCorrect = !filter(this.nick)
        )
        await this.setState(
            () => this.secnameIsCorrect = !filter(this.secname)
        )
        await this.setState(
            () => this.surnameIsCorrect = !filter(this.surname)
        )
        await this.setState(
            () => this.emailIsCorrect = !filter(this.email)
        )
        await this.setState(
            () => this.passIsCorrect = !filter(this.password)
        )
        await this.setState(
            () => this.passAgainIsCorrect = !filter(this.passAgain)
        )
        await this.setState(
            () => this.passAreSimilary = this.passAndPassagainAreSimillary()
        )
    }

    checkparams ()  {
        return  this.nameIsCorrect && 
                this.secnameIsCorrect && 
                this.surnameIsCorrect && 
                this.emailIsCorrect && 
                this.passIsCorrect &&
                this.passAgainIsCorrect &&
                this.nickIsCorrect
    }

    passAndPassagainAreSimillary() {
        return this.passAgain === this.password
    }

    render() {
        return (
            <div className="account-register font-center">
                <p className="font-mediumlarge font-bold font-smallmargin">Регистрация</p>  
                <div className={this.passAreSimilary ? "block-canActive" : "block-canActive active"}>
                    <p className="font-nomargin font-center font-smallmedium font-red"> Пароли должны совпадать</p>
                </div>        
                <div className="account-box">                
                    <div className="account-element">
                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Имя: </p>
                        <div className={this.nameIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("name", event.target.value)}}
                        />

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Отчество: </p>
                        <div className={this.secnameIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("secname", event.target.value)}}
                        />

                    </div>
                    <div className="account-element">
                        
                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Фамилия: </p>
                        <div className={this.surnameIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("surname", event.target.value)}}
                        />

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">*Гражданство: </p>
                        <div className={this.citizenshipIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("citizenship", event.target.value)}}
                        />
                    </div>
                    <div className="account-element">

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Пароль: </p>
                        <div className={this.passIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("password", event.target.value)}}
                        />

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Повторите пароль: </p>
                        <div className={this.passAgainIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("passagain", event.target.value)}}
                        />

                    </div>
                    <div className="account-element">

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">E-mail: </p>
                        <div className={this.emailIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("email", event.target.value)}}
                        />

                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">*Телефон: </p>
                        <div className={this.phoneIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("phone", event.target.value)}}
                        />
                    </div>
                    <div className="account-element">
                        <p className="font-mediumsmall font-nomargin font-topsmallmarin">Никнейм: </p>
                        <div className={this.nickIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> Поле не может быть пустым.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("nick", event.target.value)}}
                        />
                    </div>
                </div>
                <EventButton
                    content = "Зарегистрироваться"
                    eventname = {async () => {
                        await this.correctparams()
                        console.log(this.passAndPassagainAreSimillary() + " " + this.password + " " + this.passAgain)
                        if (await this.checkparams() && await this.passAndPassagainAreSimillary()) {
                            await this.register()
                        }
                    }}
                />
                <p className="font-small font-justify"> * - необязательные параметры, необходимы исключительно для заказа продукции. Наример для отсылки СМС-сообщений со статусом доставки заказа. Писать комментарии и оставлять отзывы Вы можете без указания этих параметров.</p>
            </div>
        )
    }
}

export default RegisterPage;