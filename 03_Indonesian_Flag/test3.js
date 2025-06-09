const width = 40;
const height = 8;

const topBorder = "-" + "-".repeat(width - 2) + "-";
const botBorder = topBorder;
// let rowflag = "";

console.log(topBorder);
for (let i = 0; i < height; i++) {
  const fill = i < height / 2 ? "r" : "w";

  const row = (fill + " ").repeat(width / 2 - 2).trim();
  console.log(`| ${row} |`);
}

console.log(botBorder);

// ---------------------------------------
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// ---------------------------------------

// ---------------------------------------
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w |
// ---------------------------------------
// -----------------------------------------
// | r r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r r |
// | r r r r r r r r r r r r r r r r r r r |
// | w w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w w |
// | w w w w w w w w w w w w w w w w w w w |
// -----------------------------------------
