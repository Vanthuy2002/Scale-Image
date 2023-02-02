let zom = document.querySelector(".container");
let imgZom = document.querySelector("#img__zoom");

zom.addEventListener("mousemove", (e)=>{
    imgZom.style.opacity = 1;
    let positionPx = e.clientX - zom.getBoundingClientRect().left;
    let positionX = (positionPx / zom.offsetWidth) * 100;
    imgZom.style.setProperty("--zom-x", positionX+ "%");
    let positionPy = e.clientY - zom.getBoundingClientRect().top;
    let positionY = (positionPy / zom.offsetHeight) * 100;
    imgZom.style.setProperty("--zom-y", positionY+ "%");
})
zom.addEventListener("mouseout", ()=>{
    imgZom.style.opacity = 0;
})