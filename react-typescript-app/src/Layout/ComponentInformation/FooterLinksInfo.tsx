export default class FooterLink {
    content:    string;
    hrefto:     string;
    cathegory:  string;

    constructor (content: string, hrefto: string, cathegory: string) {
        this.content    = content;
        this.hrefto     = hrefto;
        this.cathegory  = cathegory;
    }
}

export const FooterLinksInfo = [
    new FooterLink("О сайте",               "/",                "About"),
    new FooterLink("Наши контакты",         "/contacts",        "About"),
    new FooterLink("Наш интернет-магазин",  "/shop",            "About"),
    new FooterLink("Отзывы",                "/feedbacks",       "About"),
    new FooterLink("Войти",                 "/login",           "Account"),
    new FooterLink("Зарегистрироваться",    "/register",        "Account"),
    new FooterLink("Восстановить пароль",   "/recoverpass",     "Account"),
    new FooterLink("Астрономия",            "/astronomy",       "Lectory"),
    new FooterLink("Астрофизика",           "/astrophysics",    "Lectory")
]