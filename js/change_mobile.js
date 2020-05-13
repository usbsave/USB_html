
function checkserAgent(){
var userAgentInfo=navigator.userAgent;
var userAgentKeywords=new Array("Android", "iPhone" ,"SymbianOS", "Windows Phone", "iPad", "iPod", "MQQBrowser");
var flag=false;
if(userAgentInfo.indexOf("Windows NT")==-1){
flag=true;
}
return flag;
}
if(checkserAgent()){
document.location.href="https://usbsave.github.io/USB_html/m_index.html";
}