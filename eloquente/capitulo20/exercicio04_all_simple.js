var http = require("http");
var fs = require("fs");
var methods = Object.create(null);

http.createServer(function(request, response) {
    response.write(
		'<html>' +
			'<head>' +
                '<title>Capítulo 20 - Exercício 04</title>' +
                '<meta Content-Type: text/plain; charset="utf-8">' +
			'</head>' +
			'<body>' +
                '<h1>Um Espaço Público na Rede</h1>' +
                '<p> Arquivos:</p>' +
			'</body>' +
		'</html>'
    );
  function respond(code, body, type) {
    if (!type) type = "text/plain; charset=utf-8";
   

 
    if (body && body.pipe) {
        body.pipe(response);
    }
    else {
        response.write(
               body  + '<br>' + 'outra coisa'+'<br>' 
        );       
    }
  }
  if (request.method in methods) methods[request.method](urlToPath(request.url), respond, request);
  else respond(405, "Method " + request.method +" not allowed.");
}).listen(8000);

function urlToPath(url) {
    console.log("url: ", url);
  var path = require("url").parse(url).pathname;
  console.log("path: ",  path );
  return "." + decodeURIComponent(path);
}

methods.GET = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code == "ENOENT") respond(404, "File not found");
    else if (error) respond(500, error.toString());
    else if (stats.isDirectory())
      fs.readdir(path, function(error, files) {
        if (error)
          respond(500, error.toString());
        else
          respond(200, files.join("\n"));
      });
    else{
        console.log("path: ",  path );
      respond(200, fs.createReadStream(path), require("mime").lookup(path)); }
  });
};

methods.DELETE = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code == "ENOENT") respond(204);
    else if (error) respond(500, error.toString());
    else if (stats.isDirectory()) fs.rmdir(path, respondErrorOrNothing(respond));
    else fs.unlink(path, respondErrorOrNothing(respond));
  });
};

function respondErrorOrNothing(respond) {
  return function(error) {
    if (error) respond(500, error.toString());
    else respond(204);
  };
}

methods.PUT = function(path, respond, request) {
  var outStream = fs.createWriteStream(path);
  outStream.on("error", function(error) {
    respond(500, error.toString());
  });
  outStream.on("finish", function() {
    respond(204);
  });
  console.log("outStream ",  outStream );
  request.pipe(outStream);
};

methods.MKCOL = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code == "ENOENT") return fs.mkdir(path, respondErrorOrNothing(respond));
    else if (error) return respond(500, error.toString());
    else if (stats.isDirectory()) return respond(204);
    else return respond(400, "File exists");
  });
};
