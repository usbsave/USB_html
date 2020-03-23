// JavaScript Document

function setLangauge(language){
	if(language == "jt"){
		window.location.href = "/jt/index.html";
		}
		else if(language == "ft"){window.location.href = "/ft/index.html";}
		else if(language == "yy"){}
		else if(language == "ry"){}
		
		
	}
	//获取COOKIE
	function getCookie(name)
{
var strArg=name+"=";
var iArgLength=strArg.length;
var iCookieLength=document.cookie.length;
var iIndex=0;
while(iIndex<iCookieLength)
{
   var kIndex=iIndex+iArgLength;
   if(document.cookie.substring(iIndex,kIndex)==strArg) return getCookieVal(kIndex);
   iIndex=document.cookie.indexOf(" ",iIndex)+1;
   if(iIndex==0) break;
}
return null;
}

//设置cookie数据
function setCookie(name,value)
{
var strArgValue=setCookie.arguments;
var iArgLength=setCookie.arguments.length;
var expires=(2<iArgLength)?strArgValue[2]:null;
var path=(3<iArgLength)?strArgValue[3]:null;
var domain=(4<iArgLength)?strArgValue[4]:null;
var secure=(5<iArgLength)?strArgValue[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":(";expires="+expires.toGMTString()))+
((path==null)?"":(";path="+path))+((domain==null)?"":(";domain="+domain))+
((secure==true)?";secure":"");
}

//截取cookie数据
function getCookieVal(offset)
{
var iEndStr=document.cookie.indexOf(";",offset);
if(iEndStr==-1) iEndStr=document.cookie.length;
return unescape(document.cookie.substring(offset,iEndStr));
}

//获取cookie键值
function getCookieValue(cookieStr,name)
{
var cookieArr,i,pos;
var temp;
cookieStr=getCookie(cookieStr);
cookieStr+="";
if(cookieStr.length==0) return(null);
if(name.length==0) return(cookieStr);
cookieArr=cookieStr.split("&")
for(i=0;i<cookieArr.length;i++){
   temp=cookieArr[i].toLowerCase(); 
   if(name.toLowerCase() + "=" == temp.substr(0,name.length) + "=" ) {
    return(temp.substr(name.length+1));
   }
}
}

