import { NavLink } from 'react-router-dom';
import './ButtonStyles.css';

interface IHeaderMenuButton {
    content: string,
    hrefname: string
}

export const HeaderMenuButton = ({content, hrefname} : IHeaderMenuButton ) => {
    return (
        <NavLink to={hrefname}>    
            <div className="header-menu-button" >
                <p className="font-nomargin font-small"> {content} </p>
            </div>  
        </NavLink>
    )
}