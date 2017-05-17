var http = new XMLHttpRequest();
   http.open("GET", "https://api.linkedin.com/v1/people/~?format=json", true);
   var today = document.querySelector('.contener  #today');
   http.onload = function() {
    var text = http;
    var array = JSON.parse(text);
    order(array);
    
  alert(text.value);
  alert(text.errorCode + text.message + text.requestId + text.status + text.timestamp);
