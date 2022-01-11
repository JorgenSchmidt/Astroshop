import { Component } from "react";

import {HrefButton} from "../ButtonComponents/HrefButton"
 
class FooterMain extends Component {
    render() {
        return (
            <div className="footer-main">
                <hr/>
                <div className="footer-contacts">
                    <div className="footer-contacts-box">
                        <p className="font-mediumsmall font-bold">Телефон горячей линии:</p>
                        <p className="font-medium font-bold">8-900-100-00-00</p>
                    </div>
                    <div className="footer-contacts-box">
                    <p className="font-mediumsmall font-bold"> Социальные сети: </p>
                        <HrefButton
                            content="GitHub"
                            hrefto="https://github.com/JorgenSchmidt"
                        />
                        <HrefButton
                            content="YouTube"
                            hrefto="https://youtube.com"
                        />
                        <HrefButton
                            content="VK"
                            hrefto="https://vk.com"
                        />
                        <HrefButton
                            content="Twitter"
                            hrefto="https://twitter.com"
                        />
                        <HrefButton
                            content="Facebook"
                            hrefto="https://facebook.com"
                        />
                        <HrefButton
                            content="Instagram"
                            hrefto="https://instagram.com"
                        />
                    </div>
                </div>
                <hr/>
                <div className="footer-policy">
                    <p className="font-verysmall font-nomargin"> @2022 </p>
                    <p className="font-verysmall font-nomargin"> Сайт создан исключительно в учебных целях </p>
                </div>
            </div>
        )
    }
}

export default FooterMain;