import UserObject from "../GlobalStorage/AccountStorage/AccountStorage";

export async function RecordUserInfoToCookie (userinf: UserObject) {
    try {
        // recording to cookies all fields of user except id and password
        document.cookie =   "u_name="          + userinf.firstName 
        document.cookie =   "u_nick="          + userinf.nickName
        document.cookie =   "u_secondname="    + userinf.secondName
        document.cookie =   "u_surname="       + userinf.surName
        document.cookie =   "u_phone="         + userinf.phone
        document.cookie =   "u_mail="          + userinf.email
        document.cookie =   "u_citizenship="   + userinf.citizenship
    }
    catch(error) {
        console.log(error)
    }
}