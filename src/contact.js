const contact = () => {
    const content = document.querySelector("#content");
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact");

    const sections = [
        {
            title: "address",
            text: "123 Beverage St<br>Los Angeles, CA",
        },
        {
            title: "hours",
            text: "Monday - Saturday<br>7:00 am - 7:00 pm<br><br>Sunday - closed",
        },
        {
            title: "contact",
            text: "number: 555-555-5555<br>email: fake@email.com",
        },
    ];

    for (const section of sections) {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("sections");

        const title = document.createElement("h2");
        title.textContent = section.title;

        const text = document.createElement("p");
        text.innerHTML = section.text;

        contentDiv.append(title, text);
        contactContent.appendChild(contentDiv);
    }
    content.appendChild(contactContent);
}

export default contact;