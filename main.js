// 1

let on = "https://www.w3schools.com/js/pic_bulboff.gif";
let off = "https://www.w3schools.com/js/pic_bulbon.gif";
let btn = document.querySelector(".btn");
let img = document.querySelector(".img");

btn.onclick = () => {
  if (btn.innerText === "on") {
    btn.innerHTML = "off";
    img.src = on;
  } 
  else {
    btn.innerHTML = "on";
    img.src = off;
  }
};



