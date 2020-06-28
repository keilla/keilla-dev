import { appendSection, addClickTopButton } from './utils';
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
  appendSection(cardsTalks);
  appendSection(footer, 'afterEnd');
}