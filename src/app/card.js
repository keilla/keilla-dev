import card from './card.html';

export class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = card;
  }

  connectedCallback() {
    this.title = this.getAttribute('title');
    this.location = this.getAttribute('location');
    this.description = this.getAttribute('description');
    this.date = this.getAttribute('date');
    this.link = this.getAttribute('link');
    this.slides = this.getAttribute('slides');
    this.image = this.getAttribute('image');

    this.querySelector('.title').textContent = this.title;
    this.querySelector('.location').textContent = this.location;
    this.querySelector('.description').textContent = this.description;
    this.querySelector('.date').textContent = this.date;
    this.querySelector('.subscribe').setAttribute('href', this.link);

    const backgroundImage = `background-image: url(${this.image})`;
    this.querySelector('.image').setAttribute('style', backgroundImage);

    if (this.slides) {
      this.querySelector('.download').setAttribute('href', this.slides);
    }
  }
}