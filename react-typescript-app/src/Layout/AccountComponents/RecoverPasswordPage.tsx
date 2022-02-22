import { Component } from "react";
import "./AccountStyles.css";

import {EventButton} from "../ButtonComponents/EventButton"
import accountfilter from "./AccountFilter";

class RecoverPasswordPage extends Component {

    email:              string
    emailIsCorrect:     boolean

    constructor (props: any) {
        
        super(props) 

        this.email = "";

        this.emailIsCorrect = true;

    }

    onChangeParametersHandler = (field: string, value: string) => {
        switch (field) 
        {
            case "email":
                this.email = value  
            break;
    
            default: break;
        }
    }

    async recover  ()  {
        this.setState(
            () => this.emailIsCorrect = !accountfilter(this.email)
        )
        return await 0;
    }

    render() {
        return (
            <div className="account-recoverpass font-center">
                <p className="font-mediumlarge font-bold font-smalllargemargins">Восстановить пароль</p>
                <p className="font-mediumsmall font-smallmargin"> Для восстановления пароля введите имейл, на который был зарегистрирован аккаунт и мы вышлем туда письмо со ссылкой на восстановление страницы. </p>
                <div className="account-box">
                    <div className="account-element">
                        <p className="font-mediumsmall font-nomargin">E-mail: </p>
                        <div className={this.emailIsCorrect ? "block-canActive" : "block-canActive active"}>
                            <p className="font-nomargin font-small font-red"> E-mail введён неверно.</p>
                        </div>
                        <input
                            type="text"
                            onChange={event => {this.onChangeParametersHandler("email", event.target.value)}}
                        />
                    </div>
                </div>
                <EventButton
                    content = "Выслать письмо"
                    eventname = {async () => { 
                        await this.recover(); 
                        if (this.emailIsCorrect) {
                            await console.log("Req");
                        }
                    }}
                />
            </div>
        )
    }
}

export default RecoverPasswordPage;