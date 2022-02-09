import { NavLink } from 'react-router-dom';
import './ButtonStyles.css';

interface ILinkButton {
    content: string,
    hrefto: string
}

export const LinkButton = ({content, hrefto} : ILinkButton ) => {
    return (
        <NavLink to={hrefto}>
            <div className="rulebutton">
                <p className="font-nomargin font-small font-smallbold"> {content} </p>
            </div>  
        </NavLink>
    )
}