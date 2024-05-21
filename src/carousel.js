import tea from "./img/tea.jpeg";
import teasnyou from "./img/teasnyou.jpeg";
import milkteapeople from "./img/milkteapeople.jpeg";
import ticafe from "./img/ticafe.jpeg";
import miyahara from "./img/miyahara.jpeg";
import chevronBack from "./img/chevron-back.svg";
import chevronForward from "./img/chevron-forward.svg";

function createImg(src, className) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add(className);
  return img;
}

const carousel = () => {
  const frame = document.createElement("div");
  frame.classList.add("frame");

  const slideshow = document.createElement("div");
  slideshow.classList.add("slideshow");
  
  const images = [tea, teasnyou, milkteapeople, ticafe, miyahara];
  
  const slides = images.map((img) => createImg(img, "slides"));
  slides.forEach((slide) => slideshow.appendChild(slide));

  const arrowsDiv = document.createElement("div");
  arrowsDiv.classList.add("arrows-div");

  let initial = 0;
  let offset = 0;
  const imgWidth = 1733;
  const maxOffset = imgWidth * 4;

  function translateSlide(direction) {
    if (direction === "back" && initial >= 0) {
      offset = initial - imgWidth;
    } else if (direction === "forward" && initial < maxOffset) {
      offset = initial + imgWidth;
    }

    slideshow.style.transform = `translateX(-${offset}px)`;
    initial = offset;
  }
  
  const prev = document.createElement("button");
  const prevIcon = createImg(chevronBack, "arrows");
  prev.appendChild(prevIcon);

  prev.addEventListener("click", () => {
    translateSlide("back");
  });
  
  const next = document.createElement("button");
  const nextIcon = createImg(chevronForward, "arrows");
  next.appendChild(nextIcon);

  next.addEventListener("click", () => {
    translateSlide("forward");
  });

  arrowsDiv.append(prev, next);
  frame.append(slideshow, arrowsDiv);

  return {
    slideshow,
    frame,
  };
}

export default carousel;