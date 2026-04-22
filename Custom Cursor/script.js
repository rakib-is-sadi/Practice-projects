let cursor = document.querySelector(".cursor");
let display =  document.querySelector(".main");

display.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
})