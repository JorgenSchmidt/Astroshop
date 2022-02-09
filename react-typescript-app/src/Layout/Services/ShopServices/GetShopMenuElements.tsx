import MenuElement, { ShopMenuElement } from "../../ShopComponents/ShopMenuElement";

export default function GetShopMenuElements (from: Array<MenuElement>) {
    var answer = from.map (
        (curObject) => {
            return (
                <ShopMenuElement
                    count = {curObject.count}
                    category = {curObject.category}
                    clickhandler = {() => curObject.clickhandler()}
                />
            )
        }
    )
    return answer;
}