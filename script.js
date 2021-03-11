const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
let x = 0;

btn.addEventListener("click", () => {
  if (x === 0) {
    search.classList.toggle("active");
    x = 1;
  } else {
    search.classList.remove("active");
    x = 0;
  }
  input.focus();
});
