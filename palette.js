module.exports = function palette(color, message) {

  var setColor = color.toLowerCase();

  if(setColor === "red") {
    console.log('\x1b[31m%s\x1b[0m', message);
  }
  if(setColor === "yellow") {
    console.log('\x1b[33m%s\x1b[0m', message)
  }
  if(setColor === "green") {
    console.log('\x1b[32m%s\x1b[0m', message)
  }
  if(setColor === "blue") {
    console.log('\x1b[34m%s\x1b[0m', message)
  }
  if(setColor === "purple") {
    console.log('\x1b[35m%s\x1b[0m', message)
  }
  if (setColor === "white") {
    console.log('\x1b[37m%s\x1b[0m', message)
  }
};
