let menubar = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");

let xmark = document.querySelector(".fa-xmark");

menubar.addEventListener("click", function () {
  nav.classList.toggle("show");
});

xmark.addEventListener("click", function () {
  nav.classList.toggle("show");
});

function goToProductDetails(roomName) {
  window.location.href = `/room-details.html?id=${roomName}`;
  console.log(roomName);
}


