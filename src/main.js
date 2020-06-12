import './styles/style.scss';

import navBar from './app/nav-bar.html';
import hero from './app/hero.html';

function appendSection(component) {
  var node = document.createElement("div");
  node.className = "section";
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement('beforeend', node);
}

window.onload = function() {
  document.getElementById("root").innerHTML = navBar;
  appendSection(hero);
}