import './styles/style.scss';

import navBar from './app/nav-bar.html';
import hero from './app/hero.html';
import bio from './app/bio.html';
import activities from './app/activities.html';
import footer from './app/footer.html';

window.onload = function() {
  addNavBar();
  addSections();
  addClickTopButton();
}

window.onscroll = function() {
  scrollFunction()
};

function addNavBar() {
  document.getElementById("root").innerHTML = navBar;
}

function appendSection(component, postion='beforeend') {
  var node = document.createElement("div");
  node.className = "section";
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement(postion, node);
}

function addSections() {
  appendSection(hero);
  appendSection(bio);
  appendSection(activities);
  appendSection(footer, 'afterEnd');
}

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