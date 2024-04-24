import teaImg from "./tea.jpeg"

const home = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement("div");
    const homeImg = document.createElement("img");
    const description = document.createElement("div");

    homeImg.src = teaImg;

    description.textContent = `We blend tradition with innovation to craft unforgettable Asian-inspired 
        beverages. Our cozy café specializes in concocting a tantalizing array of drinks that showcase 
        the rich and diverse flavors of Asia. From refreshing Japanese matcha to creamy Thai tea, each sip 
        is a journey through the vibrant tastes of the East. Step in and embark on a flavor adventure 
        unlike any other, where every cup tells a story of cultural fusion and culinary creativity.`;

    homeContent.appendChild(homeImg);
    homeContent.appendChild(description);

    content.appendChild(homeContent);
}

export default home;