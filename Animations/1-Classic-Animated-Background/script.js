const background=document.querySelector(".bgAnimation");
const NUMBER_OF_COLONES=400;

for (let i=0;i<NUMBER_OF_COLONES;i++){
    const colorBox=document.createElement("div");
    colorBox.classList.add("colorBox");
    background.appendChild(colorBox)
}