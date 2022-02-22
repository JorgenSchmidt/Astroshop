import { NavLink } from 'react-router-dom';
import './ButtonStyles.css';

interface IHeaderMainButton {
    content:    string,
    refto:      string,
}

export const HeaderMainButton = ({content, refto} : IHeaderMainButton ) => {
    return (
        <NavLink to={refto}>
            <div className="header-main-button">
                <p className="font-nomargin font-small"> {content} </p>
            </div>  
        </NavLink>
    )
}