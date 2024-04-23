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

buttonListeners();

/*
Put the contents of each ‘tab’ inside of its own module. 
Each module will export a function that creates a div element, 
adds the appropriate content and styles to that element and then appends it to the DOM.

Write the tab-switching logic inside of index.js. 
You should have event listeners for each button in the header navbar 
that wipes out the current contents of div#content 
and then runs the correct ‘tab module’ to populate it with the new contents again.
*/