module.exports = function palette(color, message) {

  if(color === "red") {
    return console.log('\x1b[31m%s\x1b[0m', message);
  }
  if(color === "yellow") {
    return console.log('\x1b[33m%s\x1b[0m', message);
  }
  if(color === "green") {
    return console.log('\x1b[32m%s\x1b[0m', message);
  }
  if(color === "blue") {
    return console.log('\x1b[34m%s\x1b[0m', message);
  }
  if(color === "purple") {
    return console.log('\x1b[35m%s\x1b[0m', message);
  }
  if (color === "white") {
    return console.log('\x1b[37m%s\x1b[0m', message);
  }

};
