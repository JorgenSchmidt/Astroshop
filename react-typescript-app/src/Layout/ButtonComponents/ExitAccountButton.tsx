import './ButtonStyles.css';

interface IExitAccountButton {
    content: string,
    eventname: () => void
}

export const ExitAccountButton = ({content, eventname} : IExitAccountButton ) => {
    return (
        <div className="exitAccountButton" onClick={eventname}>
            <p className="font-nomargin font-small font-smallbold"> {content} </p>
        </div>  
    )
}