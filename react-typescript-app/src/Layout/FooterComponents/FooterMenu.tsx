import { Component } from "react";
import "./FooterStyles.css";
import {FooterMenuElement} from "./FooterMenuElement"

class FooterMenu extends Component {
    render() {
        return (
            <div className="footer-menu">
                <div className="menu-hrefbox">
                    <p className="font-mediumsmall font-nomargin font-bold"> О проекте </p>
                    <FooterMenuElement
                        content="О сайте"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Наши контакты"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Наш интернет-магазин"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Отзывы"
                        hrefto="/"
                    />
                </div>
                <div className="menu-hrefbox">
                    <p className="font-mediumsmall font-nomargin font-bold"> Аккаунт </p>
                    <FooterMenuElement
                        content="Войти"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Зарегистрироваться"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Восстановить пароль"
                        hrefto="/"
                    />
                </div>
                <div className="menu-hrefbox"> 
                    <p className="font-mediumsmall font-nomargin font-bold"> Наш лекторий </p>
                    <FooterMenuElement
                        content="Астрономия"
                        hrefto="/"
                    />
                    <FooterMenuElement
                        content="Астрофизика"
                        hrefto="/"
                    />
                </div>
            </div>
        )
    }
}

export default FooterMenu;