

const homePresentation = document.createElement("div");
homePresentation.classList.add("presentation");
homePresentation.innerHTML = '<h2>BURGUER CASTERS</h2> <p>Lorem ipsilum olore magna. Duis aute irure dolor in reprehenderit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea in pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>';

import burguerImage from "./burguer.jpg";
const homeImage = document.createElement("img");
homeImage.src = burguerImage;

export {homePresentation, homeImage};
