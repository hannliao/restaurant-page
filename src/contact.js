const contact = () => {
    const content = document.querySelector("#content");
    const contactContent = document.createElement("div");
    contactContent.textContent = "please do not contact us.";

    content.appendChild(contactContent);
}

export default contact;