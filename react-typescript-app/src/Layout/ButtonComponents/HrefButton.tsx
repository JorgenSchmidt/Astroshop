import './ButtonStyles.css';

interface IHrefButton {
    content: string
    hrefto: string
}

export const HrefButton = ({content, hrefto} : IHrefButton ) => {
    return (
    <a href={hrefto} target="_blank">
        <div className="hrefbutton">
            <p className="font-small font-nomargin">{content}</p>
        </div>
    </a>
    )
}