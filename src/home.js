import teaImg from "./tea.jpeg"

const home = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement("div");
    
    const homeImg = document.createElement("img");
    homeImg.src = teaImg;

    homeContent.appendChild(homeImg);
    homeContent.classList.add("homeContent");

    content.appendChild(homeContent);
}

export default home;