const topic = document.querySelector(".topic");
const container = document.querySelector(".container");

document.querySelector(".topic").addEventListener("mouseover", function () {
  topic.style.color = "hsl(47, 88%, 63%)";
  container.style.boxShadow = "10px 10px 0 black";
});

document.querySelector(".topic").addEventListener("mouseout", function () {
  topic.style.color = "black";
  container.style.boxShadow = "5px 5px 0 black";
});
