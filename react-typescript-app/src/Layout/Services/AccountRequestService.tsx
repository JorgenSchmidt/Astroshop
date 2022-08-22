import axios from "axios";
import { backendAddres } from "../AppConfiguration";
import { cookieIsExist, parseCookie} from "../CookieService/CookiesService";
import UserObject from "../GlobalStorage/AccountStorage/AccountStorage";

export async function getAccountTokenAtRegistration(GettedUserInfo: UserObject): Promise<string> {

    let token = "";

    await axios.post (
        backendAddres + "User/Register",
        {
            "ID": 1,
            "FirstName": GettedUserInfo.firstName,
            "NickName": GettedUserInfo.nickName,
            "SecondName": GettedUserInfo.secondName,
            "SurName": GettedUserInfo.surName,
            "Citizenship": GettedUserInfo.citizenship,
            "Phone": GettedUserInfo.phone,
            "Email": GettedUserInfo.email,
            "Password": GettedUserInfo.password,
            "IsBanned": false,
            "LegalLevel": GettedUserInfo.legalLevel
        }
        ).then (
            function (response) {
                token = response.data.body
            }
        ).catch (
            function (error) {
                console.log(error)
            }
        )
    return await token;
}

export async function getAccountInfo (token: string): Promise<UserObject> {

    // Костыль...
    let userinf: unknown;

    await axios.post (
    backendAddres + "User/Translate",
    {
        "Body": token
    }
    ).then (
        function (response) {
            userinf = response.data.body
        }
    ).catch (
        function (error) {
            console.log(error)
        }
    )

    return await userinf as UserObject
}

export async function getUserField(targetField: string): Promise<string> {

    if (!cookieIsExist("token")) {
        return "";
    }

    let ans = ""
    await axios.post (
    backendAddres + "User/Translate",
    {
        "Body": parseCookie("token")
    }
    ).then (
        response => { 
            switch (targetField) {
                case "legalLevel":
                    ans = response.data.body.legalLevel
                break;
                case "firstName":
                    ans = response.data.body.firstName
                break;
                case "secondName":
                    ans = response.data.body.secondName
                break;
                case "surName":
                    ans = response.data.body.surName
                break;
                case "id":
                    ans = response.data.body.id
                break;
            }
        }
    ) 
    .catch (
        function (error) {
            console.log(error)
        }
    )    
    return await ans;
}