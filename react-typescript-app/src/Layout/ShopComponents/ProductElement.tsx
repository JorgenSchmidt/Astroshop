import { NavLink } from 'react-router-dom';
import './ShopStyles.css'; 

export default class Product {

    ID:         number;
    Category:   string;
    Name:       string;
    Content:    string;
    Count:      number;
    Price:      string;
    RefTo:      string;

    constructor (id: number, category: string, name: string, content: string, count: number, price: string, refto: string) {
        this.ID = id;
        this.Category = category;
        this.Name = name;
        this.Content = content;
        this.Count = count;
        this.Price = price;
        this.RefTo = refto;
    }

}

export const ProductElement = ({ Category, Name, Content, Count, Price, RefTo }: Product) => {
    return(
        <NavLink to={RefTo}>    
            <div className = "product-card">
                <p className="font-justify font-verysmall">{Category}</p>
                <p className="font-center font-mediumsmall">{Name}, цена {Price}</p>
                <div className={Count === 0 ? "block-canActive active" : "block-canActive"}>
                    <p className="font-center font-nomargin font-red font-verysmall">Товара нет на складе!</p>
                </div>
                <p className="font-justify font-smallmedium">{Content}</p>
            </div>
        </NavLink>
    )
}