"use-strict";
const log = console.log.bind(console);
function getSelector(getElement) {
  const element = document.querySelector(getElement);
  if (element) {
    return element;
  } else {
    throw Error(`There is no element called ${getElement}`);
  }
}
function getSelectors(getElements) {
  const elements = document.querySelectorAll(getElements);
  if (elements.length < 1) {
    throw Error(`There are no elements called ${getElements}`);
  } else {
    return elements;
  }
}
function getID(getElement) {
  const element = document.getElementById(getElement);
  if (element) {
    return element;
  } else {
    throw Error(`There is no ID called ${getElement}`);
  }
}

const slider = getSelector(".slider");
const starter = getID("starterImage");
const images = getSelectors(".slider-image");
let imageIndex = 1;

autoSlide();

function autoSlide() {
  let firstImage = images[0];
  let prevImage = images[imageIndex - 1];
  let thisImage = images[imageIndex];
  let nextImage = images[imageIndex + 1];
  let lastImage = images[images.length - 1];

  log(imageIndex);

  thisImage.classList.add("move-image");
  log(thisImage);

  nextImage.classList.add("move-image");
  log(nextImage);

  prevImage.classList.remove("move-image");
  log(prevImage);

  imageIndex++;

  if (imageIndex == images.length - 1) {
    // thisImage.classList.add("move-image");
    // log(thisImage);touch
    // prevImage.classList.remove("move-image");
    // log(prevImage);

    images.forEach((image) => image.remove("move-image"));
    firstImage.classList.add("start-image");
    // prevImage.classList.remove("move-image");
    // lastImage.classList.remove("move-image");
    // autoSlide();
    imageIndex = 1;
    // autoSlide();
  }
  //  else {
  //   // log(imageIndex);
  // }
  // setTimeout(autoSlide, 1000);
}
