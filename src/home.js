import teaImg from "./tea.jpeg"

const home = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement("div");
    const homeImg = document.createElement("img");
    const description = document.createElement("div");

    homeImg.src = teaImg;

    description.textContent = `beverages of cultural fusion and culinary creativity`;
    description.classList.add("desc");

    homeContent.appendChild(homeImg);
    homeContent.appendChild(description);
    homeContent.classList.add("homeContent");

    content.appendChild(homeContent);
}

export default home;