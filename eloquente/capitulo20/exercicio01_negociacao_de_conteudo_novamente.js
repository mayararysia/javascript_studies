var http = require("http");
var types = ["text/plain", "text/html", "application/json"];

function readStreamAsString(stream, callback) {
    var data = "";
    stream.on("data", function(chunk) {
      data += chunk.toString();
    });
    stream.on("end", function() {
      callback(null, data);
    });
    stream.on("error", function(error) {
      callback(error);
    });
}

function request(type){

    http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: {Accept: type}
    }, function(response) {
            console.log("Server responded with status code: ", response.statusCode);
            readStreamAsString(response, function(error, content) {
                if (error) throw error;
                console.log("Type ", type, ": ", content);
            });
    }).end();
}

types.forEach(function(header) {
      request(header);
});