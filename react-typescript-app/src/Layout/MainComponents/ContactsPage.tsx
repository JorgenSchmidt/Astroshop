import "./MainStyles.css"

export const ContactsPage = () => {
    return (    
        <div className="main-contactspage">
            <p className="font-medium font-bold font-center">Наши контакты</p>
            <div className="main-box">
                <div className="main-element">
                    <p className="font-mediumsmall font-bold">Адрес: Nбург, ул. Nбургская д. 1, оф. 1.</p>
                </div>
                <div className="main-element">
                    <p className="font-mediumsmall font-bold">Телефон: 8-900-100-00-00</p>
                </div>
                <div className="main-element">
                    <p className="font-mediumsmall font-bold">E-mail: someacc@some.sm</p>
                </div>
            </div>
        </div>
    )
}