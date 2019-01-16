// File name: index.js
// Description: Root file for server
// Date created: 14th January 2018
// Author: Josip Seric
/*
// Module imports
const express = require('express');

// Create a new express app and define port
const app = express();
const PORT = 5000;

// Import routes
require('./routes/jammerRoutes')(app);











// START TEST

const spawn = require('child_process').spawn;
const fs = require('fs');

// Root route
// Path: /
// Type: GET
app.get(
  '/',
  (req, res) => {
    const child = spawn('gcc');
    child.stdout.on('data', (data) => {
      console.log('child stdout:\n' + data);
      var stream = fs.createWriteStream("file.txt");
      stream.once('open', function(fd) {
        stream.write(data);
        stream.end();
      });
    });






    res.send("Hello world!");
  }
);


// END TEST














// Start web server
app.listen(PORT);
*/

// START TEST 2

// with express 3.x
var express = require('express');
var app = express();

//app.use(express.logger('dev'));
//app.use(express.bodyParser());

//app.use(app.router);

var nodeScript;

app.get(
  '/test/2',
  (req, res) => {

    nodeScript = require('child_process').spawn(
      '/Josip/Development/raspberry-jammer/server/temp/a.exe',
      [
        //'/Josip/Development/raspberry-jammer/server/temp/example.cpp'
      ],
      {
        //detached: true
      }
    );

    var output = "";

    nodeScript.stdout.on('data', (data) => {
      output += data;
      console.log(output);
    });

    nodeScript.on('message', (code) => {
      if (code !== 0)
        return console.log(code);

      return console.log(output);
    });


    /*
    var child_process = require('child_process');

    child_process.exec(
      'node /Josip/Development/raspberry-jammer/server/temp/example.js',
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(stdout);
        process.exit(0);

      });
      */

      res.send("Hello");
  }
);

app.get(
  '/test/3',
  (req, res) => {
    nodeScript.kill();

    res.send("Hi");
  }
)

/*
app.post('/upload', function(req, res){
   if(req.files.myUpload){
     var python = require('child_process').spawn(
     'python',
     // second argument is array of parameters, e.g.:
     ["/home/me/pythonScript.py"
     , req.files.myUpload.path
     , req.files.myUpload.type]
     );
     var output = "";
     python.stdout.on('data', function(data){ output += data });
     python.on('close', function(code){
       if (code !== 0) {
           return res.send(500, code);
       }
       return res.send(200, output);
     });
   } else { res.send(500, 'No file found') }
});
*/
require('http').createServer(app).listen(5000, function(){
  console.log('Listening on 3000');
});

// END TEST 2
