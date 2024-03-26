const express = require("express");
const fs = require("fs");

const route = express.Router();

route.post("/", (req, res) => {
  const { message, username } = req.body;

  if (message && username) {
    let message_body = `${username}: ${message} \n`;
    fs.appendFile("message.txt", message_body, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const temp = data.split("\n");
    console.log(temp);
    res.write("<html>");
    res.write("<body>");
    temp.map((item) => {
      res.write(`<p>${item}</p>`);
    });

    res.write(
      "<form action='/' method='post'><input type='text' name='message'/><input type='hidden' name='username' id='hiddenuser'/><button type='submit'>send</button></form>"
    );
    res.write("</body>");
    res.write("<script>");
    res.write(
      "document.getElementById('hiddenuser').value = localStorage.getItem('username')"
    );
    res.write("</script>");
    res.write("</html>");
    res.end();
  });
});

route.post("/message", (req, res) => {
  const { message, username } = req.body;

  console.log(message, username);
  return res.send("");
});

module.exports = route;
