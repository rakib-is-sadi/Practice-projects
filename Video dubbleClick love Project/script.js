let container = document.getElementById("container");
let love = document.querySelector("i");

container.addEventListener("dblclick", (e) => {

  const rect = container.getBoundingClientRect();

  love.style.top = (e.clientY - rect.top) + "px";
  love.style.left = (e.clientX - rect.left) + "px";
  love.style.opacity = 0.7;
  love.style.transform = "translate(-50%, -50%) scale(1)";

   setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
});