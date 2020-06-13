import './styles/style.scss';

import navBar from './app/nav-bar.html';
import hero from './app/hero.html';
import bio from './app/bio.html';
import activities from './app/activities.html';
import footer from './app/footer.html';

function appendSection(component, postion='beforeend') {
  var node = document.createElement("div");
  node.className = "section";
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement(postion, node);
}

window.onload = function() {
  document.getElementById("root").innerHTML = navBar;
  appendSection(hero);
  appendSection(bio);
  appendSection(activities);
  appendSection(footer, 'afterEnd');
}