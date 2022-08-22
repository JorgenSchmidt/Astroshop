import { writeCookieWithoutDate, сookiesDelete } from "../../CookieService/CookiesService";
import { RecordUserInfoToCookie } from "../../CookieService/RecordUserInfo";
import { getAccountInfo, getAccountTokenAtRegistration } from "../../Services/AccountRequestService";
import { filter } from "../../Services/StringFilter";
import UserObject, { AccountStorage } from "./AccountStorage"

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
}

// How to work this func:
// 1. Send getted userinfo to server to recive usertoken, after usertoken will record to cookie;
// 2. Send getted token (from 1st step) to server to recive userinfo (need for safety);
// 3a. Record userInfo to global account storage, after account info will record to cookie from account storage;
// 3b. Upon completion, there will be a transition to main page.
export async function ToRegisterReducer (GettedUserInfo: UserObject) {
    
    // 1.
    let token : string = await getAccountTokenAtRegistration(GettedUserInfo);
    writeCookieWithoutDate("token", token.toString())

    // 2. 
    let userinf : UserObject = await getAccountInfo(token); 

    // 3.
    await CopyUserObjectToStorage(userinf)
    await RecordUserInfoToCookie(AccountStorage);
    document.location = "/"
}

export async function ToLoginReducer (token: string) 
{
    // not implemented
}

export async function GetUserInfo () 
{
    // not implemented
}

// For completion logout cookies will be deleted
export async function ToExitAccount () {
    сookiesDelete()
    document.location = "/"
}