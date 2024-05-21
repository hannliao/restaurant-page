import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import githubMark from "./img/github-mark.svg";

function buttonListeners() {
  const content = document.querySelector("#content");
  const buttons = document.querySelectorAll("nav button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      content.textContent = "";
      const buttonText = button.textContent;

      switch (buttonText) {
        case "Menu":
          menu();
          break;
        case "Drinks":
          menu();
          scrollTo("#drinks");
          break;
        case "Ice Cream":
          menu();
          scrollTo("#ice-cream");
          break;
        case "Contact":
          contact();
          break;
        default:
          home();
          break;
      }
    });
  });
}

function scrollTo(selector) {
  const section = document.querySelector(selector);
  section.scrollIntoView({ behavior: "smooth" });
}

function dropdownListeners() {
  const menuDiv = document.querySelector(".menu-div");
  const dropdown = document.querySelector(".dropdown");

  menuDiv.addEventListener("mouseover", () => {
    dropdown.classList.add("visible");
  });

  menuDiv.addEventListener("mouseout", () => {
    dropdown.classList.remove("visible");
  });
}

const link = document.querySelector("footer a");
const github = document.createElement("img");
github.src = githubMark;
link.appendChild(github);

home();
buttonListeners();
dropdownListeners();
