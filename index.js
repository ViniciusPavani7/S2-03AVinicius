var http = require('http');
var dt = require('./homePage');
var dt1 = require('./medicoPage');
var dt2 = require('./planosPage');
var dt3 = require('./loginPage');
var dt4 = require('./registerPage');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("HomePage " + dt.myDateTime() + "<br> <br>" + 
            "medicoPage " + dt1.myDateTime1() + "<br> <br>" + 
            "planosPage " + dt2.myDateTime2() + "<br> <br>" +
            "loginPage "  + dt3.myDateTime3() + "<br> <br>" +
            "registerPage " + dt4.myDateTime4());
  res.end();
}).listen(5009);

