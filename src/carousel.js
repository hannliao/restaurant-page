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
  const numImages = 5;
  const maxOffset = imgWidth * (numImages - 1);

  function translateSlide(direction) {
    prev.disabled = false;
    next.disabled = false;

    if (direction === "back" && initial > 0) {
      offset = initial - imgWidth;
      dots.active -= 1;
    } else if (direction === "forward" && initial < maxOffset) {
      offset = initial + imgWidth;
      dots.active += 1;
    } else {
      offset = imgWidth * Number(direction);
    }

    dots.clear();
    dots.all[dots.active].style.backgroundColor = "white";
    slideshow.style.transform = `translateX(-${offset}px)`;
    initial = offset;

    if (initial === 0) {
      prev.disabled = true;
    } else if (initial === maxOffset) {
      next.disabled = true;
    }

    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
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

  const dotsDiv = document.createElement("div");
  dotsDiv.classList.add("dots-div");

  const dots = {
    all: [],
    active: 0,
    setColor(dot, color) {
      dot.style.backgroundColor = color;
    },
    clear() {
      this.all.forEach((dot) => this.setColor(dot, "transparent"));
    },
  };

  for (let i = 0; i < numImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dots");
    dots.all.push(dot);
    dotsDiv.appendChild(dot);

    dot.addEventListener("click", () => {
      dots.clear();
      dots.active = i;
      dots.setColor(dot, "white");

      translateSlide(i)
    });
  }

  dots.setColor(dots.all[0], "white");
  prev.disabled = true;

  frame.append(slideshow, arrowsDiv, dotsDiv);

  function nextSlide() {
    let nextIndex = dots.active + 1;
    if (nextIndex === numImages) {
      nextIndex = 0;
    }
    dots.active = nextIndex;
    translateSlide(nextIndex);
  }

  let slideInterval = setInterval(nextSlide, 5000);

  return {
    slideshow,
    frame,
  };
}

export default carousel;