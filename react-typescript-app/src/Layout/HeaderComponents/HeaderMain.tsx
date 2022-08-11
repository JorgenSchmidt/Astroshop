import { Component } from "react";
import "./HeaderStyles.css"

import { HeaderMainButton } from "../ButtonComponents/HeaderMainButton";
import { AccountStorage, CheckByDefaultStateOfStorage, DefaultStorage} from "../GlobalStorage/AccountStorage/AccountStorage";
import { AccountInfoElement } from "./AccountInfoElement";
import { ToExitAccount } from "../GlobalStorage/AccountStorage/AccountReducers";
import { ExitAccountButton } from "../ButtonComponents/ExitAccountButton";
import { parseCookie } from "../CookieService/CookiesService";

class HeaderMain extends Component {

    firstName:      string
    nickName:       string
    secondName:     string
    surName:        string
    legalLevel:     string

    constructor(props: any) {

        super(props)

        this.firstName = parseCookie("u_name")
        this.nickName = parseCookie("u_nick")
        this.secondName = parseCookie("u_secondname")
        this.surName = parseCookie("u_surname")
        this.legalLevel = parseCookie("u_legallevel");
    }

    render() {
        console.log(CheckByDefaultStateOfStorage())
        console.log(AccountStorage)
        console.log(DefaultStorage)
        if (!CheckByDefaultStateOfStorage()) {
            return (
                <div className="header-main">
                    <div className="header-main-higher">
                        <div className="header-main-accountPage">
                            <AccountInfoElement
                                nick = {this.nickName}
                                name = {this.firstName}
                                secname = {this.secondName}
                                surname = {this.surName}
                                legalLevel = {this.legalLevel}
                            />
                            <ExitAccountButton
                                content="Выйти"
                                eventname={ToExitAccount}
                            />
                        </div>
                    </div>
                    <div className="header-main-lower">
                        <p className="font-white font-bold font-center font-large">Astroshop!</p>
                    </div>
                </div>
            )
        }
        else {
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
                        <p className="font-white font-bold font-center font-large">Astroshop!</p>
                    </div>
                </div>
            )
        }
    }
}

export default HeaderMain;