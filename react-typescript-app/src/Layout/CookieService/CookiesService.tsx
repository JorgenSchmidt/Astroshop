//                                                   				 lifetime measured in days
export async function writeCookie(cookiename: string, value: string, lifetime: number) 
{
  var date = new Date;
  date.setDate(date.getDate() + lifetime);
  document.cookie = await cookiename + "=" + value + "; path=/; expires=" + date.toUTCString();
}

export async function writeCookieWithoutDate(cookiename: string, value: string) 
{
  document.cookie = await cookiename + "=" + value + "; path=/;";
}

export function parseCookie(targetfield: string) : string {
	let ans = "";
	let fields = document.cookie.split(";")
	for (var q = 0; q < fields.length; q++) {
		let i = fields[q].split("=")
		if (i[0].toString().split(' ').join('') === targetfield.toString()) {
			ans = i[1].toString()
		}
	}
	return ans;
}

export async function сookiesDelete() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = await name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = await name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
} 

// for manual removal
/* 
var cookies = document.cookie.split(";");	for (var i = 0; i < cookies.length; i++) {		var cookie = cookies[i];		var eqPos = cookie.indexOf("=");		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;		document.cookie = await name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";		document.cookie = await name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';	}
*/