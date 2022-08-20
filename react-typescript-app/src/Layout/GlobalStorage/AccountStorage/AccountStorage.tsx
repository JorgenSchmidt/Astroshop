import { parseCookie } from "../../CookieService/CookiesService"

export default class UserObject {
    firstName:              string
    nickName:               string
    secondName:             string
    surName:                string
    citizenship:            string
    email:                  string
    password:               string
    legalLevel:             string
    phone:                  string
    id:                     number

    constructor (
        firstName:              string,
        nickName:               string,
        secondName:             string,
        surname:                string,
        citizenship:            string,
        email:                  string,
        password:               string,
        legalLevel:             string,
        phone:                  string,
        id:                     number
    ) 
    {
        this.firstName = firstName
        this.nickName = nickName
        this.secondName = secondName
        this.surName = surname
        this.citizenship = citizenship
        this.email = email
        this.password = password
        this.legalLevel = legalLevel
        this.phone = phone
        this.id = id
    }
}

export let AccountStorage = new UserObject (
    parseCookie("u_name"),
    parseCookie("u_nick"),
    parseCookie("u_secondname"),
    parseCookie("u_surname"),
    parseCookie("u_citizenship"),
    parseCookie("u_mail"),
    "",
    "",
    parseCookie("u_phone"),
    0
)

export const DefaultStorage = new UserObject (
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    0
)

export function CheckByDefaultStateOfStorage() {
    return AccountStorage.firstName === DefaultStorage.firstName
    &&AccountStorage.secondName === DefaultStorage.secondName
    &&AccountStorage.surName === DefaultStorage.surName
    &&AccountStorage.nickName === DefaultStorage.nickName
}