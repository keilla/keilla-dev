import './styles/style.scss';

window.onload = function () {
  addClickTopButton();
}

window.onscroll = function () {
  scrollFunction();
};


function addClickTopButton() {
  const topButton = document.getElementById("top-button");
  topButton.onclick = topFunction;
}

function scrollFunction() {
  const topButton = document.getElementById("top-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
