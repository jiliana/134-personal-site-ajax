const template = document.createElement('template');

class ButtonCount extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement("button");
        button.setAttribute("id", "button");
        button.setAttribute("data-clicks", 0);
        button.textContent = `Number of clicks: ${button.getAttribute("data-clicks")}`;

        button.addEventListener('click', () => {
            var clicks = parseInt(button.getAttribute("data-clicks"));
            clicks += 1;
            button.setAttribute("data-clicks", clicks);
            console.log("event: add");
            button.textContent = `Number of clicks: ${button.getAttribute("data-clicks")}`;
        });

        shadow.appendChild(button);

    }

}


// Define in custom elements registry
window.customElements.define('button-count', ButtonCount);