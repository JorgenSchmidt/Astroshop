import { NavLink } from 'react-router-dom';
import './ButtonStyles.css';

interface IHeaderMenuButton {
    content:    string,
    refto:      string
}

export const HeaderMenuButton = ({content, refto} : IHeaderMenuButton ) => {
    return (
        <NavLink to={refto}>    
            <div className="header-menu-button" >
                <p className="font-nomargin font-small"> {content} </p>
            </div>  
        </NavLink>
    )
}