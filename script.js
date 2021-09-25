import { log, getSelector, getSelectors, getID } from "./setup.js";

const images = [...getSelectors(".slider-image")];
const slider = getSelector(".slider");
let count = 0;

autoSlide();

function autoSlide() {
  if (count === 0) {
    log(count);
    images[count].classList.add("show-image");
    images.at(-1).classList.add("exit-image");

    const otherImages = images.filter(
      (image) => image != images.at(-1) && images[count]
    );
    otherImages.forEach(image => image.classList.remove("show-image", "exit-image"))
  }

  if (count > 0) {
    log(count);
    images[count - 1].classList.add("exit-image");
    images[count - 1].classList.remove("show-image");
    images[count].classList.add("show-image");
  }

  count++;

  if (count === images.length) {
    images[0].classList.remove("exit-image");

    images.at(-1).classList.add("show-image");
    
    count = 0;
  }

    // if (count < images.length) setTimeout(autoSlide, 1000);
}
