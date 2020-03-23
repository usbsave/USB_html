  var URL = document.location.toString();
  var useragent = navigator.userAgent;
  useragent = useragent.toLowerCase();

  if( useragent.indexOf('iphone') != -1 ) location.replace("m_index.html");//iphone
  else if( useragent.indexOf('ipad') != -1 || useragent.indexOf('ipod') != -1) location.replace("m_index.html");//ipad
  else if( useragent.indexOf('android') != -1 ) {
  if( ConsiderLimits() )
  {
  location.replace("m_index.html"); 
  }else{
  location.replace("m_index.html");
  }
  }


  function ConsiderLimits() {
  if( screen.width >= 1024 && screen.height >= 600 )
  return 1;
  return 0;
  }
