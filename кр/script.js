import {AccordionsComponent} from './components/accordions-components.js';
import {render, RenderPosition} from './render.js';

const bodyContainer = document.querySelector('body');

render(new AccordionsComponent(), bodyContainer, RenderPosition.AFTEREND);

const accordions = document.querySelectorAll(".accordion-item");
console.log(accordions)
for (const accordion of accordions) {
  const content = accordion.querySelector(".accordion-content");
  accordion.querySelector(".accordion-button").addEventListener("click", () => {
    content.style.maxHeight = !content.style.maxHeight
      ? `${content.scrollHeight}px`
      : null;
  });
}


