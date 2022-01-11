import { NavLink } from 'react-router-dom';
import "./FooterStyles.css";

interface IMenuElement {
    content: string,
    hrefto: string
}

export const FooterMenuElement = ({content, hrefto} : IMenuElement) => {
    return (
        <NavLink to={hrefto}>    
            <div className="menu-element">
                <p className="font-smallmedium font-nomargin font-tograyhover">{content}</p>
            </div>
        </NavLink>
    )
}