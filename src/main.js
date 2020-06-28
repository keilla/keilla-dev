import './styles/style.scss';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const topButton = document.getElementById("top-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

