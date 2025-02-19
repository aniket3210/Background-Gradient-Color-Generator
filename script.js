let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".main3");
let downloadBtn = document.getElementById("downloadBtn");

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
};

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

// Download Gradient as Image (Only Background)
downloadBtn.addEventListener("click", () => {
  // Create a temporary div to capture the background
  const tempDiv = document.createElement("div");
  tempDiv.style.position = "fixed";
  tempDiv.style.top = "0";
  tempDiv.style.left = "0";
  tempDiv.style.width = "100%";
  tempDiv.style.height = "100%";
  tempDiv.style.backgroundImage = document.body.style.backgroundImage; // Copy the gradient
  tempDiv.style.zIndex = "-1"; // Move it behind everything
  document.body.appendChild(tempDiv);

  // Use html2canvas to capture the temporary div
  html2canvas(tempDiv, {
    logging: false,
    useCORS: true,
  }).then((canvas) => {
    // Convert canvas to image
    let image = canvas.toDataURL("image/png");

    // Create a temporary link element
    let link = document.createElement("a");
    link.href = image;
    link.download = "gradient.png"; // File name
    link.click(); // Trigger download

    // Remove the temporary div
    document.body.removeChild(tempDiv);
  });
});
