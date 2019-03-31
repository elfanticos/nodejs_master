/**
 * Primary file for the API
 * 
 */

// Depencencias
var http = require('http');
var url  = require('url');


var server = http.createServer((req,res) => {
    // Obtener la url y castearlo
    var parsedUrl  = url.parse(req.url,true);

    // Obtener el path
    var path = parsedUrl.pathname;

    // Quitar los slack y backslash
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    console.log('trimmedPath',trimmedPath);

    console.log('path',path);


    // Envio de respuesta
    res.end('Hello word');

    // Log de request path

});

server.listen(3000, () => {
    console.log('Servidor corriendo en este puerto');
})