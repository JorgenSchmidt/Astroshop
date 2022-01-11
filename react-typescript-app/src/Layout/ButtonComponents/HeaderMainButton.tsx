import './ButtonStyles.css';

interface IHeaderMainButton {
    content: string,
    eventname: () => void
}

export const HeaderMainButton = ({content, eventname} : IHeaderMainButton ) => {
    return (
        <div className="header-main-button" onClick={eventname}>
            <p className="font-nomargin font-small"> {content} </p>
        </div>  
    )
}