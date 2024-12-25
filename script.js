let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".main3");

const getHexCode = () => {
  let hexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + hexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let rgb1 = getHexCode(); 
let rgb2 = getHexCode();


const updateBackground = () => {
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton1 = () => {
    rgb1 = getHexCode(); 
    btn1.innerText = rgb1;
    updateBackground();
}

const handleButton2 = () => {
    rgb2 = getHexCode(); 
    btn2.innerText = rgb2;
    updateBackground();
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
document.querySelector(".main2").addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerHTML);
    alert("Code has been copied");
});