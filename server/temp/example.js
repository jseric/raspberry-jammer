


// START TEST
/*
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

*/
// END TEST


// START TEST 2
/*
var nodeScript;

app.get(
  '/test/2',
  (req, res) => {

    nodeScript = require('child_process').spawn(
      '/Users/jseric/Development/raspberry-jammer/server/temp/a',
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
			console.log(data);
      console.log(output);

    });

    nodeScript.on('message', (code) => {
      if (code !== 0)
        return console.log(code);

      return console.log(output);
    });

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
*/
// END TEST 2
