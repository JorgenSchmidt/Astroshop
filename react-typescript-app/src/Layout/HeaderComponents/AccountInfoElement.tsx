import "./HeaderStyles.css"

interface IAccountInfoElement {
    name:                   string
    nick:                   string
    secname:                string
    surname:                string
    legalLevel:             string
}

export const AccountInfoElement = ({name, nick, secname, surname, legalLevel} : IAccountInfoElement) => {
    return (
        <div className="header-main-accountInfo">
            <div className="header-main-accountInfoElement">
                <p className="font-nomargin font-smallmedium">
                    Пользователь: {name} {secname} {surname}
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