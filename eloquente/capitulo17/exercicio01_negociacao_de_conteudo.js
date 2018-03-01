/*example - Accept: text/plain; q=0.5, text/html, text/x-dvi; q=0.8, text/x-c ...*/
//http://eloquentjavascript.net/author
var types = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

function request(header) {
    var req = new XMLHttpRequest();
    req.open("GET", "http://eloquentjavascript.net/author", false);
    req.setRequestHeader("Accept", header);
    req.send(null);
    console.log(req.status, req.statusText);
    return req.responseText;
}  
  
types.forEach(function(header) {
    try {
      console.log(header+": ", request(header));
    }catch(error){
      console.log("Error: " + error);
    }
});