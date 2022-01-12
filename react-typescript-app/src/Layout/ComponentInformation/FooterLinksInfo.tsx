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
    new FooterLink("О сайте",               "/",    "About"),
    new FooterLink("Наши контакты",         "/",    "About"),
    new FooterLink("Наш интернет-магазин",  "/",    "About"),
    new FooterLink("Отзывы",                "/",    "About"),
    new FooterLink("Войти",                 "/",    "Account"),
    new FooterLink("Зарегистрироваться",    "/",    "Account"),
    new FooterLink("Восстановить пароль",   "/",    "Account"),
    new FooterLink("Астрономия",            "/",    "Lectory"),
    new FooterLink("Астрофизика",           "/",    "Lectory")
]