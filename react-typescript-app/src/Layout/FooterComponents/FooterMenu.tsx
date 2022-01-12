import { Component } from "react";
import "./FooterStyles.css";

import { FooterLinksInfo } from "../ComponentInformation/FooterLinksInfo"
import GetFooterLinksInfo  from "../Services/GetFooterLinksInfo"

class FooterMenu extends Component {

    render() {

        const aboutlinks = GetFooterLinksInfo(
            FooterLinksInfo.filter(components => components.cathegory === "About")
        )

        const accountlinks = GetFooterLinksInfo(
            FooterLinksInfo.filter(components => components.cathegory === "Account")
        )

        const lectorylinks = GetFooterLinksInfo(
            FooterLinksInfo.filter(components => components.cathegory === "Lectory")
        )

        return (
            <div className="footer-menu">
                <div className="menu-hrefbox">
                    <p className="font-mediumsmall font-nomargin font-bold"> О проекте </p>
                    {aboutlinks}
                </div>
                <div className="menu-hrefbox">
                    <p className="font-mediumsmall font-nomargin font-bold"> Аккаунт </p>
                    {accountlinks}
                </div>
                <div className="menu-hrefbox"> 
                    <p className="font-mediumsmall font-nomargin font-bold"> Наш лекторий </p>
                    {lectorylinks}
                </div>
            </div>
        )
    }
}

export default FooterMenu;