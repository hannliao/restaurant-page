const menu = () => {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    menuInfo.innerHTML = `Our drinks and ice cream flavors are inspired by 
    the owner's favorites from all around the world`;

    const cafes = [
        {
            name: "Milk Tea People",
            location: "Denver, Colorado, USA",
        },
        {
            name: "Tí Cafe",
            location: "Denver, Colorado, USA",
        },
        {
            name: "Teas'n You",
            location: "Vienna, Virginia, USA",
        },
        {
            name: "Miyahara",
            location: "Central District, Taichung City, Taiwan",
        },
    ];

    for (const cafe of cafes) {
        const cafeDiv = document.createElement("div");
        cafeDiv.classList.add("cafes");

        const name = document.createElement("h4");
        name.textContent = cafe.name;

        const location = document.createElement("p");
        location.textContent = cafe.location;

        cafeDiv.append(name, location);
        menuInfo.appendChild(cafeDiv);
    }
    menuContent.appendChild(menuInfo);
    
    const drinks = [
        {
            name: "uji matcha", 
            description: "ceremonial matcha with a hint of jasmine", 
            price: "$8",
        },
        {
            name: "pandan matcha",
            description: "matcha latte with pandan syrup",
            price: "$8",
        },
        {
            name: "butterfly lychee", 
            description: "butterfly pea coconut milk latte with lychee bits",
            price: "$7",
        },
        {
            name: "dragonfruit rose",
            description: "floral rose and succulent dragonfruit swirled in coconut milk", 
            price: "$8",
        },
        {
            name: "ube jasmine cream", 
            description: "rich ube latte topped with jasmine foam", 
            price: "$7",
        },
        {
            name: "taro black sesame cream",
            description: "fresh taro tapioca pudding with black sesame cream",
            price: "$8",
        },
        {
            name: "rose osmanthus cream",
            description: "osmanthus tea topped with sea salt foam and rose petals",
            price: "$7",
        },
        {
            name: "thai tea",
            description: "creamy condensed milk over thai tea", 
            price: "$7",
        },
    ];

    const iceCream = [
        {
            name: "irwin mango",
            chineseName: "愛文芒果",
        },
        {
            name: "kyoho grape",
            chineseName: "巨峰葡萄",
        },
        {
            name: "passionfruit",
            chineseName: "百香果",
        },
        {
            name: "guava",
            chineseName: "芭樂",
        },
        {
            name: "honey grapefruit",
            chineseName: "花蜜葡萄柚",
        },
        {
            name: "kumquat lemon",
            chineseName: "金桔檸檬",
        },
        {
            name: "alishan oolong tea",
            chineseName: "阿里山烏龍茶",
        },
        {
            name: "tie guan yin",
            chineseName: "南巖鐵觀音",
        },
        {
            name: "oriental beauty",
            chineseName: "東方美人",
        },
        {
            name: "songboling green tea",
            chineseName: "松柏嶺綠茶",
        },
    ];

    const drinksHeader = document.createElement("h2");
    drinksHeader.classList.add("header");
    drinksHeader.id = "drinks";
    drinksHeader.textContent = "drinks";
    menuContent.appendChild(drinksHeader);

    for (const drink of drinks) {
        const drinkDiv = document.createElement("div");
        drinkDiv.classList.add("drinks");

        const name = document.createElement("h3");
        name.classList.add("name");
        name.textContent = drink.name;

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = drink.description;

        const price = document.createElement("h3");
        price.classList.add("price");
        price.textContent = drink.price;

        drinkDiv.append(name, description, price);
        menuContent.appendChild(drinkDiv);
    }

    const iceCreamHeader = document.createElement("h2");
    iceCreamHeader.classList.add("header");
    iceCreamHeader.id = "ice-cream";
    iceCreamHeader.textContent = "ice cream";

    const prices = [
        {
            scoop: "single",
            price: "$5",
        },
        {
            scoop: "double",
            price: "$9",
        },
        {
            scoop: "triple",
            price: "$12",
        },
    ];

    const pricesDiv = document.createElement("div");
    pricesDiv.classList.add("ice-price");

    for (const p of prices) {
        const priceDiv = document.createElement("h3");
        priceDiv.textContent = `${p.scoop} ${p.price}`;
        pricesDiv.appendChild(priceDiv);
    }

    menuContent.append(iceCreamHeader, pricesDiv);

    for (const flavor of iceCream) {
        const flavorDiv = document.createElement("div");
        flavorDiv.classList.add("flavors");

        const name = document.createElement("h3");
        name.classList.add("ice-name");
        name.textContent = flavor.name;

        const chineseName = document.createElement("p");
        chineseName.classList.add("chinese-name");
        chineseName.textContent = flavor.chineseName;

        flavorDiv.append(name, chineseName);
        menuContent.appendChild(flavorDiv);
    }

    content.appendChild(menuContent);
}

export default menu;