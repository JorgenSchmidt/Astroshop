import MenuElement, { ShopMenuElement } from "../../ShopComponents/ShopMenuElement";

export default function GetShopMenuElements (from: Array<MenuElement>, category: string) {
    var answer;

    if (category !== "") {
        const filter = from.filter(ans => ans.category === category);
        answer = filter.map (
            (curObject) => {
                return (
                    <ShopMenuElement
                        count = {curObject.count}
                        category = {curObject.category}
                        clickhandler = {() => curObject.clickhandler}
                    />
                )
            }
        )
    }

    else {
        answer = from.map (
            (curObject) => {
                return (
                    <ShopMenuElement
                        count = {curObject.count}
                        category = {curObject.category}
                        clickhandler = {() => curObject.clickhandler}
                    />
                )
            }
        )
    }

    return answer;
}