const colors = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  purple: 35,
  cyan: 36,
  white: 37
};

module.exports = function palette(color, message) {
  if (colors[color]) {
    return console.log(`\x1b[${colors[color]}m%s\x1b[0m`, message);
  }
  return console.log(message);
};
