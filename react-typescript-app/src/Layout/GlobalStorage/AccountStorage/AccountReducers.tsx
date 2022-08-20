import axios from "axios";
import { backendAddres } from "../../AppConfiguration";
import { cookieIsExist, parseCookie, writeCookieWithoutDate, сookiesDelete } from "../../CookieService/CookiesService";
import { RecordUserInfoToCookie } from "../../CookieService/RecordUserInfo";
import UserObject, { AccountStorage, DefaultStorage } from "./AccountStorage"

async function CopyUserObjectToStorage(GettedUserInfo: any) {
    
            if (GettedUserInfo.id !== 0) {
                AccountStorage.id = GettedUserInfo.id
            }
        
            if (!filter(GettedUserInfo.firstName)) {
                AccountStorage.firstName = GettedUserInfo.firstName
            }

            if (!filter(GettedUserInfo.firstName)) {
                AccountStorage.nickName = GettedUserInfo.nickName
            }
        
            if(!filter(GettedUserInfo.secondName)) {
                AccountStorage.secondName = GettedUserInfo.secondName
            }
        
            if(!filter(GettedUserInfo.surName)) {
                AccountStorage.surName = GettedUserInfo.surName
            }
            
            if(!filter(GettedUserInfo.citizenship)) {
                AccountStorage.citizenship = GettedUserInfo.citizenship
            }
            
            if(!filter(GettedUserInfo.email)) {
                AccountStorage.email = GettedUserInfo.email
            }
            
            if(!filter(GettedUserInfo.legalLevel)) {
                AccountStorage.legalLevel = GettedUserInfo.legalLevel
            }
            
            if(!filter(GettedUserInfo.email)) {
                AccountStorage.email = GettedUserInfo.email
            }
            
            if(!filter(GettedUserInfo.phone)) {
                AccountStorage.phone = GettedUserInfo.phone
            }
        
    console.log(GettedUserInfo)
    console.log(AccountStorage === DefaultStorage)
}

function filter(x: string) {
    return(typeof x == 'undefined')
                    ||
        (x === null) 
                    ||
        (x.length === 0)
                    ||
        (x === "")
                    ||
        (x.replace(/\s/g,"") === "")
                    ||
        (!/[^\s]/.test(x))
                    ||
        (/^\s*$/.test(x))
}

export async function ToRegisterReducer (GettedUserInfo: UserObject) {
    let token;
    let userinf;

    // Get and save token part
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
            writeCookieWithoutDate("token", token.toString())
        }
    ) 
    .catch (
        function (error) {
            console.log(error)
        }
    )

    // Send token to register part
    await axios.post (
    backendAddres + "User/Translate",
    {
        "Body": token
    }
    ).then (
        function (response) {
            userinf = response.data.body
        }
    ) 
    .catch (
        function (error) {
            console.log(error)
        }
    )
    
    await CopyUserObjectToStorage(userinf)
    await RecordUserInfoToCookie(AccountStorage);
    document.location = "/"
}

export async function ToLoginReducer (token: string) 
{
    return AccountStorage;
}

export async function ToExitAccount () {
    сookiesDelete()
    document.location = "/"
}

export async function GetUserInfo () 
{
    return AccountStorage;
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
            }
        }
    ) 
    .catch (
        function (error) {
            console.log(error)
        }
    )    
    return ans;
}