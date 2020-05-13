$( ".li1" ).mouseover(function() {
    $("#nav_address").fadeOut();
    $("#fwxm").css("display","block");
    $("#fwxm").css("height","43px");
    $("#fwxm").css("width","795px");
    $("#fwxm").css("margin-left","16px");
    $("#fwxm").css("background-color","#fff");
    $("#fwxm").css("border-top-right-radius","20px");
    $("#fwxm").css("border-bottom-left-radius","20px");
    $("#fwxm").css("border-bottom-right-radius","20px");
    $("#fwxm").css("margin-top","5px");
    setTimeout(function(){$("#fwxm").fadeOut()}, 4000);
});

$( ".li2" ).mouseover(function() {
    $("#fwxm").fadeOut();
    $("#nav_address").css("display","block");
    $("#nav_address").css("height","43px");
    $("#nav_address").css("width","500px");
    $("#nav_address").css("padding-left","20px");
    $("#nav_address").css("margin-left","16px");
    $("#nav_address").css("background-color","#fff");
    $("#nav_address").css("border-top-right-radius","20px");
    $("#nav_address").css("border-bottom-left-radius","20px");
    $("#nav_address").css("border-bottom-right-radius","20px");
    $("#nav_address").css("margin-top","5px");
    setTimeout(function(){$("#nav_address").fadeOut()}, 4000);
});

// function nav_item(){
//     // console.log("3秒");
//     $("#fwxm").css("display","none");
//     $("#fwxm").css("height","43px");
//     $("#fwxm").css("width","795px");
//     $("#fwxm").css("margin-left","16px");
//     $("#fwxm").css("background-color","#fff");
//     $("#fwxm").css("border-top-right-radius","20px");
//     $("#fwxm").css("border-bottom-left-radius","20px");
//     $("#fwxm").css("border-bottom-right-radius","20px");
//     $("#fwxm").css("margin-top","5px");
// }

// function nav_item2(){
//     // console.log("3秒");
//     $("#nav_address").css("display","none");
//     $("#nav_address").css("height","43px");
//     $("#nav_address").css("width","500px");
//     $("#nav_address").css("padding-left","20px");
//     $("#nav_address").css("margin-left","16px");
//     $("#nav_address").css("background-color","#fff");
//     $("#nav_address").css("border-top-right-radius","20px");
//     $("#nav_address").css("border-bottom-left-radius","20px");
//     $("#nav_address").css("border-bottom-right-radius","20px");
//     $("#nav_address").css("margin-top","5px");
// }

// // $( ".li1" ).mouseleave(function() {
// //     
// // });

// // $( ".li2" ).mouseleave(function() {
// //     
// // });

