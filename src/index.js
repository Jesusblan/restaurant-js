import "./styles.css";
import {homePresentation, homeImage} from "./home.js"
import { menuHeader } from "./menu.js";


const container = document.querySelector("#content");

const homeButton = document.querySelector("#home");

homeButton.addEventListener("click", () =>{
    container.innerHTML = "";
    container.setAttribute("id", "content");

    container.appendChild(homePresentation);
    container.appendChild(homeImage);
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => { 
    container.innerHTML = "";
    container.setAttribute("id", "menuContent");

    container.appendChild(menuHeader);
});