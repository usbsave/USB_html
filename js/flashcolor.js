$(document).ready(function() {

  var objs = $(".flashColor");
  setInterval(
  	function(){
  		for(var i = 0 ; i < objs.length ; i ++){

  			var obj = $(objs[i]);
  			var current =obj.css("color");

  			if(current=='rgb(255, 0, 0)'){
  				obj.css("color" , "black");
  			}else{
  				obj.css("color" ,"red");
  			}
  		}
  } , 500);

});
