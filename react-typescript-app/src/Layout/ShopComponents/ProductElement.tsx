import { NavLink } from 'react-router-dom';
import './ShopStyles.css'; 

export default class Product {

    ID:         number;
    Category:   string;
    Name:       string;
    Content:    string;
    Price:      string;
    RefTo:      string;

    constructor (id: number, category: string, name: string, content: string, price: string, refto: string) {
        this.ID = id;
        this.Category = category;
        this.Name = name;
        this.Content = content;
        this.Price = price;
        this.RefTo = refto;
    }

}

export const ProductElement = ({ Category, Name, Content, Price, RefTo }: Product) => {
    return(
        <NavLink to={RefTo}>    
            <div className = "product-card">
                <p className="font-justify font-verysmall">{Category}</p>
                <p className="font-center font-mediumsmall">{Name}, цена {Price}</p>
                <p className="font-justify font-smallmedium">{Content}</p>
            </div>
        </NavLink>
    )
}