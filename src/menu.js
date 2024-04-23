const menu = () => {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    const drinks = {
        drink1: "uji matcha",
        drink2: "butterfly lychee latte",
        drink3: "ube jasmine cream",
        drink4: "dragonfruit rose latte",
        drink5: "thai tea latte"
    };

    for (const key in drinks) {
        const d = document.createElement("div");
        d.textContent = drinks[key];
        menuContent.appendChild(d);
    }
    content.appendChild(menuContent);
}

export default menu;