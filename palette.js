const colors = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  purple: 35,
  cyan: 36,
  white: 37
};

const palette = (color, message) =>
  console.log(colors[color]
              ? `\x1b[${colors[color]}m${message}\x1b[0m`
              : message
             );

module.exports = palette;
