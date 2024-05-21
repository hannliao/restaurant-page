import carousel from "./carousel";

const home = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement("div");
    
    const { slideshow, frame } = carousel();

    homeContent.append(slideshow, frame);
    homeContent.classList.add("homeContent");

    content.appendChild(homeContent);
}

export default home;