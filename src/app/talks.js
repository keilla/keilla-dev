import { appendSection, appendElem, addClickTopButton } from './utils';
import { CardComponent } from './card';

import cardsTalks from './cards-talks.html';
import footer from './footer.html';

window.onload = function () {
  addClickTopButton();
  customElements.define('card-actitivity', CardComponent);
  render();
}

export function render() {
  addSections();
}

function addSections() {
  appendElem(cardsTalks);
  appendSection(footer, 'afterEnd');
}