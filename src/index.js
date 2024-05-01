import "./style.css"
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js"

function buttonListeners() {
    const content = document.querySelector("#content");
    const buttons = document.querySelectorAll("header nav button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            content.textContent = "";
            const buttonText = button.textContent;

            switch (buttonText) {
                case "Menu":
                    menu();
                    break;
                case "Contact":
                    contact();
                    break;
                default:
                    home();
                    break;
            }
        })
    })
}

home();
buttonListeners();