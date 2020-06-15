import { appendSection } from './utils';

import footer from './footer.html';

window.onload = function () {
  render();
}

export function render() {
  addSections();
}

function addSections() {
  appendSection(footer, 'afterEnd');
}