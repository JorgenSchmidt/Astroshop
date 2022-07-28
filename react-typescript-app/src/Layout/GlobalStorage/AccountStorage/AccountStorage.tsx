export default class UserObject {
    firstName:              string
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
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    0
)

export const DefaultStorage = new UserObject (
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    0
)

export function CheckByDefaultStateOfStorage() {
    return AccountStorage.firstName === DefaultStorage.firstName
    &&AccountStorage.secondName === DefaultStorage.secondName
    &&AccountStorage.surName === DefaultStorage.surName
    &&AccountStorage.id === DefaultStorage.id
    &&AccountStorage.citizenship === DefaultStorage.citizenship
    &&AccountStorage.phone === DefaultStorage.phone
    &&AccountStorage.legalLevel === DefaultStorage.legalLevel
    &&AccountStorage.email === DefaultStorage.email
}