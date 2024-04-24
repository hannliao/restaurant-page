const menu = () => {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    
    const drinks = [
        {
            name: "uji matcha", 
            description: "creamy ceremonial matcha with a hint of jasmine", 
            price: "$8"
        },
        {
            name: "butterfly lychee latte", 
            description: "butterfly pea coconut milk latte with juicy lychee bits",
            price: "$8"
        },
        {
            name: "ube jasmine cream", 
            description: "rich ube latte topped with a fragrant jasmine foam", 
            price: "$7"
        },
        {
            name: "dragonfruit rose latte",
            description: "floral rose and succulent dragonfruit swirled in coconut milk", 
            price: "$8"
        },
        {
            name: "thai tea latte",
            description: "creamy condensed milk over richly brewed thai tea", 
            price: "$7"
        }
    ];

    for (const drink of drinks) {
        const d = document.createElement("div");
        d.classList.add("drinks");

        const name = document.createElement("h3");
        name.classList.add("name");
        name.textContent = drink.name;

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = drink.description;

        const price = document.createElement("h3");
        price.classList.add("price");
        price.textContent = drink.price;

        d.append(name, description, price);
        menuContent.appendChild(d);
    }
    content.appendChild(menuContent);
}

export default menu;