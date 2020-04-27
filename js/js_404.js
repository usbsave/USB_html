//設定倒數秒數
var t = 6;

//顯示倒數秒收
function showTime()
{
    t -= 1;
    document.getElementById('timer').innerHTML= t;
    
    if(t==1){
        location.href="https://usbsave.github.io/USB_html/";
    }
    
    //每秒執行一次,showTime()
    setTimeout("showTime()",1000);
}

//執行showTime()
showTime();
