import { HrefButton } from "../ButtonComponents/HrefButton";
import OutsideLink from "../ComponentInformation/OutsideLinksInfo";

export default function GetOutsideLinksInfo (from: Array<OutsideLink>) {
    let answer = from.map (
        (curObject) => {
            return (
                <HrefButton
                    hrefto = {curObject.hrefto}
                    content = {curObject.content}
                />
            )
        }
    )

    return answer
}