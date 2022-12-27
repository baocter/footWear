const banner = document.getElementById("banner");

const text = "25% off (Almost) Everything! Use Code: Summer Sale";
let tx = 1;
setInterval(writeText, 200);
function writeText() {
  banner.innerText = text.slice(0, tx);
  tx++;
  if (tx > text.length) {
    tx = 1;
  }
}
