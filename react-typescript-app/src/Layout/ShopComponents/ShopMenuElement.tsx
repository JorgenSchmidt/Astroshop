import './ShopStyles.css'; 

export default class MenuElement {
    count:          number;
    category:       string;
    clickhandler:   () => void;

    constructor (count: number, category: string, clickhandler: () => void) {
        this.count = count;
        this.category = category;
        this.clickhandler = clickhandler;
    }
}

export const ShopMenuElement = ({count, category, clickhandler}: MenuElement) => {
    return (
        <div className="shop-menu-element" onClick={clickhandler}>
            <p  className="font-nomargin font-smallmedium font-tograyhover">
                { 
                    category[0].toUpperCase() + category.substring(1)} ({count}
                )
            </p>
        </div>
    )
}