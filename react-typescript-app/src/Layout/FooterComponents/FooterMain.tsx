import { Component } from "react";

import { OutsideLinksInfo } from "../ComponentInformation/OutsideLinksInfo"
import GetOutsideLinksInfo from "../Services/GetOutsideLinksInfo";
 
class FooterMain extends Component {
    render() {

        const outsidelinks = GetOutsideLinksInfo(OutsideLinksInfo);

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
                        {outsidelinks}
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