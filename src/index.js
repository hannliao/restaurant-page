import "./style.css"
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js"

function buttonListeners() {
    const content = document.querySelector("#content");
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            content.textContent = "";
            const buttonText = button.textContent;

            switch (buttonText) {
                case "Menu":
                    menu();
                    break;
                case "Drinks":
                    menu();
                    const drinksSection = document.querySelector("#drinks");
                    drinksSection.scrollIntoView({ behavior: "smooth" });
                    break;
                case "Ice Cream":
                    menu();
                    const iceCreamSection = document.querySelector("#ice-cream");
                    iceCreamSection.scrollIntoView({ behavior: "smooth" });
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

    const menuDiv = document.querySelector(".menu-div");
    const dropdown = document.querySelector(".dropdown");

    menuDiv.addEventListener("mouseover", () => {
        dropdown.classList.add("visible");
    });

    menuDiv.addEventListener("mouseout", () => {
        dropdown.classList.remove("visible");
    });
}

home();
buttonListeners();