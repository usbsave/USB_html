;"use strict";

$(document).ready(function() {
  indexPage.init();

});

var indexPage = {
    is_open_menu: false,
    menu_icon: $('.menu-icon'),
    menu_section: $('.menu-section'),
    has_sub_tab: $('.has-sub-tab'),
    init: function() {
      this.menuCtrl();
    },
    menuCtrl: function() {
      var is_open_menu = this.is_open_menu;
      var menu_icon = this.menu_icon;
      var menu_section = this.menu_section;

      menu_icon.click(function(){
        if(is_open_menu) {
          menu_icon.removeClass('active');
          menu_section.removeClass('active');
          is_open_menu = false;
        }
        else {
          menu_icon.addClass('active');
          menu_section.addClass('active');
          is_open_menu = true;
        }
      });
    },
};


  var speed=140 
  var demo=document.getElementById("demo"); 
  var demo2=document.getElementById("demo2"); 
  var demo1=document.getElementById("demo1"); 
  demo2.innerHTML=demo1.innerHTML 
  function Marquee(){ 
  if(demo2.offsetTop-demo.scrollTop<=0) 
    demo.scrollTop-=demo1.offsetHeight 
  else{ 
    demo.scrollTop++ 
  } 
  } 
  var MyMar=setInterval(Marquee,speed) 
  demo.onmouseover=function() {clearInterval(MyMar)} 
  demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 
