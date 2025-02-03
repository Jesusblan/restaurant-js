import "./styles.css";
import {homePresentation, homeImage} from "./home.js"
import { menuHeader, menuItem1, menuItem2, menuItem3, menuItem4 } from "./menu.js";
import { aboutTitle, aboutContent, contactTitle, contactInfo } from "./about.js";

const container = document.querySelector("#content");

//home button
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () =>{
    container.innerHTML = "";
    container.setAttribute("id", "content");

    container.appendChild(homePresentation);
    container.appendChild(homeImage);
});

//menu button
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => { 
    container.innerHTML = "";
    container.setAttribute("id", "menuContent");

    container.appendChild(menuHeader);
    container.appendChild(menuItem1);
    container.appendChild(menuItem2);
    container.appendChild(menuItem3);
    container.appendChild(menuItem4);
});

//about button
const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", ()=>{
    container.innerHTML = "";
    container.setAttribute("id", "aboutContent");

    container.appendChild(aboutTitle);
    container.appendChild(aboutContent);
    container.appendChild(contactTitle);
    container.appendChild(contactInfo);
});


homeButton.click()