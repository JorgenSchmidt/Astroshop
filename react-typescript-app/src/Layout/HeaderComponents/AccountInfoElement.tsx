import "./HeaderStyles.css"

interface IAccountInfoElement {
    name:                   string
    nick:                   string
    surname:                string
    legalLevel:             string
}

export const AccountInfoElement = ({name, nick, surname, legalLevel} : IAccountInfoElement) => {
    return (
        <div className="header-main-accountInfo">
            <div className="header-main-accountInfoElement">
                <p className="font-nomargin font-smallmedium">
                    Пользователь: {nick}
                </p>
            </div>
            <div className="header-main-accountInfoElement">
                <p className="font-nomargin font-smallmedium">
                    {name} {surname}
                </p>
            </div>
            <div className="header-main-accountInfoElement"> 
                <p className="font-nomargin font-mediumsmall">
                    Уровень прав: {legalLevel} 
                </p>
            </div>
        </div>
    )
}