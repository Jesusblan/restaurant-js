import "./styles.css";
import {homePresentation, homeImage} from "./home.js"



const container = document.querySelector("#content");

function goHome(){

}

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () =>{
    container.innerHTML = "";

    container.appendChild(homePresentation);
    container.appendChild(homeImage);
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => { 
    container.innerHTML = "";
})