import { appendSection, addClickTopButton } from './utils';

import navBar from '../app/nav-bar.html';
import hero from '../app/hero.html';
import bio from '../app/bio.html';
import activities from '../app/activities.html';
import footer from './footer.html';

window.onload = function () {
  addClickTopButton();
  render();
}

function render() {
  addNavBar();
  addSections();
}

function addNavBar() {
  document.getElementById("root").innerHTML = navBar;
}

function addSections() {
  appendSection(hero);
  appendSection(bio);
  appendSection(activities);
  appendSection(footer, 'afterEnd');
}