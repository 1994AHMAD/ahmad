const link = "https://www.youtube.com/watch?v=QfVwnkKCCnA";
const link1 = "https://www.youtube.com/watch?v=QfVwnkKCCnA";
const button = document.querySelector(".button_0");
const button_1 = document.querySelector(".button_1");
const image_1 = document.querySelector(".image_1");

image_1.addEventListener("click", function () {
  const newTab = window.open();
  newTab.location.href = "pages/main.html";
});
button.addEventListener("click", function () {
  window.open(link1, "_self");
});
button_1.addEventListener("click", function () {
  // window.open(link1, "");
  window.open(link1, "_self");
});
