import { FooterMenuElement } from "../FooterComponents/FooterMenuElement";
import FooterLink from "../ComponentInformation/FooterLinksInfo";

export default function GetFooterLinksInfo (from: Array<FooterLink>) {

    let answer = from.map (
        (curObject) => {
            return (
                < FooterMenuElement
                    hrefto = {curObject.hrefto}
                    content = {curObject.content}
                />
            )
        }
    )

    return answer

}