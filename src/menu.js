
const menuHeader = document.createElement("h2");
menuHeader.classList.add("menuHeader");
menuHeader.innerHTML = "Feeling hungry?";

const menuItem1 = document.createElement("div");
menuItem1.classList.add("menuItem");
    import burguer1 from "./simpleBurguer.jpg";
    const itemPic1 = document.createElement("img");
    itemPic1.src = burguer1;
menuItem1.appendChild(itemPic1)

export {menuHeader};