const width = 40 * 2;
const height = 8 * 2;

const topBorder = "-".repeat(width - 1);
const botBorder = topBorder;
console.log(topBorder);

//! FIX
let innerWidth = width - 4;

for (let i = 0; i < height; i++) {
  const fill = i < height / 2 ? "r" : "w";

  const charCount = Math.floor(innerWidth / 2);
  // console.log(charCount + " per rownya");
  const row = Array(charCount).fill(fill).join(" ");
  // console.log(row + " rownya");
  console.log(`| ${row} |`);
}
//! FIX

// for (let i = 0; i < height; i++) {
//   const fill = i < height / 2 ? "r" : "w";

//   const row = (fill + " ").repeat(width / 2 - 2).trim();
//   console.log(`| ${row} |`);
// }

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
