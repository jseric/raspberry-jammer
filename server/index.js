
const express = require('express');
const exec = require('child_process').exec;

let child = (command) => {
  return new Promise((resolve, reject) => {
    exec(
      command,
      (error, stdout, stderr) => {
        /*console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }*/
        resolve(stdout);
      }
    );
  })

}

const app = express();
const PORT = 5000;

app.get(
  '/hi',
  async (req, res) => {
    let reply = await child("pwd");
    res.send(reply);
  }
)

app.listen(PORT);
