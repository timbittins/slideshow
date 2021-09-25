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
let counter = -1;
let imageIndex = 1;

autoSlide();

function autoSlide() {
  let firstImage = images[0];

  let prevImage = images[imageIndex - 1];

  let thisImage = images[imageIndex];

  let nextImage = images[imageIndex + 1];

  let lastImage = images[images.length - 1];

  // let move = (element, value = 0) =>
  //   (element.style.transform = `TranslateX(${value}%)`);

  // let setBack = (element, value = 100) =>
  //   (element.style.transform = `TranslateX(${value}%)`);

  log(imageIndex);

  thisImage.classList.add("move-image");
  log(thisImage);

  imageIndex++;

  if (imageIndex == images.length -2) {
    // imageIndex = 1;
    firstImage.classList.add("move-image");
    images.forEach(image => image.remove("move-image"))
    // prevImage.classList.remove("move-image");
    // lastImage.classList.remove("move-image");
    // autoSlide();
    setTimeout(autoSlide, 1000);
  } else {
    // log(imageIndex);

    nextImage.classList.add("move-image");
    log(nextImage);

    prevImage.classList.remove("move-image");
    log(prevImage);
  }

  setTimeout(autoSlide, 1000);
}

// function autoSlide() {
//   let prevImage = images[imageIndex - 1];

//   let thisImage = images[imageIndex];

//   let nextImage = images[imageIndex + 1];

//   let lastImage = images[images.length -1] ;

//   let move = (element, value = 0) =>
//     (element.style.transform = `TranslateX(${value}%)`);

//   let setBack = (element, value = 100) =>
//     (element.style.transform = `TranslateX(${value}%)`);

//   // starterImage.classList.remove("start-image");
//   log(imageIndex);
//   move(thisImage);
//   log(thisImage);
//   imageIndex++;

//   log(imageIndex);
//   move(nextImage);
//   log(nextImage);
//   // starterImage.classList.add("start-image");

//   setBack(prevImage);
//   log(prevImage);

//   if (imageIndex == images.length ) imageIndex = 1;
//   if (imageIndex == 1) setBack(lastImage);

//   // setBack(lastImage);
//   setTimeout(autoSlide, 1000);

// }

// slideShow();
// function slideShow() {
//     let size = images[0].clientWidth;
//     counter++;
//   log(counter);
//   let move =
//     (slider.style.transform =
//     slider.style.transform =
//       "translateX(-" + size * counter + "px)");
//   log(move);
//   if (counter > (images.length -2)) counter = -1;
//   setTimeout(slideShow, 2000);
// }
