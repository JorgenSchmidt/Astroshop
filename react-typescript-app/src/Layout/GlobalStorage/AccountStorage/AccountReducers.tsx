import axios from "axios";
import UserObject, { AccountStorage, DefaultStorage } from "./AccountStorage"

async function CopyUserObjectToStorage(GettedUserInfo: any) {
    
            if (GettedUserInfo.id !== 0) {
                AccountStorage.id = GettedUserInfo.id
            }
        
            if (!filter(GettedUserInfo.firstName)) {
                AccountStorage.firstName = GettedUserInfo.firstName
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
    "https://localhost:44393/api/User/Register",
    {
        "ID": 1,
        "FirstName": GettedUserInfo.firstName,
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
    ) 
    .catch (
        function (error) {
            console.log(error)
        }
    )
    await console.log(token)

    // Send token to register part
    await axios.post (
    "https://localhost:44393/api/User/Translate",
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
    await console.log(userinf)
    await console.log(AccountStorage)
    await CopyUserObjectToStorage(userinf)
    await console.log(AccountStorage)
}

export async function ToLoginReducer (token: string) 
{
    return AccountStorage;
}

export async function ToExitAccount () {
    return;
}

export async function GetUserInfo () 
{
    return AccountStorage;
}