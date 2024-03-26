const fs = require("fs");

const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  // console.log(res);

  res.write("<html>");
  res.write("<body>");
  res.write(
    "<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/' method='post'><input id='username' type='text' name='username'/><button type='submit'>login</button></form>"
  );
  res.write("</body>");
  res.write("</html>");
  res.end();
});

module.exports = route;
