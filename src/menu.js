//header
const menuHeader = document.createElement("h2");
menuHeader.classList.add("menuHeader");
menuHeader.innerHTML = "Feeling hungry?";

//item1
const menuItem1 = document.createElement("div");
menuItem1.classList.add("menuItem");
    import burguer1 from "./simpleBurger.jpg";
    const itemPic1 = document.createElement("img");
    itemPic1.src = burguer1;
    itemPic1.classList.add("itemImg")
menuItem1.appendChild(itemPic1);
    const itemTitle1 = document.createElement("h2");
    itemTitle1.innerHTML = "Simple Burger";
menuItem1.appendChild(itemTitle1);

    const itemInfo1 = document.createElement("p");
    itemInfo1.innerHTML = "The Simple Burger is the coolest burguer with tender meat and tasty cheese!";
    menuItem1.appendChild(itemInfo1);

//item2
    const menuItem2 = document.createElement("div");
menuItem2.classList.add("menuItem");
    import burguer2 from "./burger2.jpg";
    const itemPic2 = document.createElement("img");
    itemPic2.src = burguer2;
    itemPic2.classList.add("itemImg")
menuItem2.appendChild(itemPic2);
    const itemTitle2 = document.createElement("h2");
    itemTitle2.innerHTML = "Egg Burger";
menuItem2.appendChild(itemTitle2);

    const itemInfo2 = document.createElement("p");
    itemInfo2.innerHTML = "The Egg Burger is the coolest burguer with tender meat and tasty egg!";
    menuItem2.appendChild(itemInfo2);

//item3
    const menuItem3 = document.createElement("div");
menuItem3.classList.add("menuItem");
    import burguer3 from "./burger3.jpg";
    const itemPic3 = document.createElement("img");
    itemPic3.src = burguer3;
    itemPic3.classList.add("itemImg")
menuItem3.appendChild(itemPic3);
    const itemTitle3 = document.createElement("h2");
    itemTitle3.innerHTML = "Simple Burger";
menuItem3.appendChild(itemTitle3);

    const itemInfo3 = document.createElement("p");
    itemInfo3.innerHTML = "The Simple Burger is the coolest burguer with tender meat and tasty cheese!";
    menuItem3.appendChild(itemInfo3);

//item4
    const menuItem4 = document.createElement("div");
menuItem4.classList.add("menuItem");
    import burguer4 from "./burger4.jpg";
    const itemPic4 = document.createElement("img");
    itemPic4.src = burguer4;
    itemPic4.classList.add("itemImg")
menuItem4.appendChild(itemPic4);
    const itemTitle4 = document.createElement("h2");
    itemTitle4.innerHTML = "Simple Brguer";
menuItem4.appendChild(itemTitle4);

    const itemInfo4 = document.createElement("p");
    itemInfo4.innerHTML = "The Simple Burger is the coolest burguer with tender meat and tasty cheese!";
    menuItem4.appendChild(itemInfo4);

export {menuHeader, menuItem1, menuItem2, menuItem3, menuItem4};