// const title = document.getElementById("title");
const title = document.querySelector("#title");
// const allPTags = document.getElementsByTagName("p");
const allPTags = document.querySelectorAll("p");
// const redBg = document.getElementsByClassName("red-bg");
const redBg = document.querySelectorAll(".red-bg");

const gallery = document.getElementById("gallery");
const changeImgBtn = document.getElementById("change-img");
// changeImgBtn.addEventListener("click", changeImage);
changeImgBtn.onclick = changeImage;
let imgs = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg?t=1620488613",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg?t=1623272225",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1313860/header_alt_assets_2.jpg?t=1623346742",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg?t=1623330660"
];

let currentIndex = 0;

function changeImage() {
    currentIndex += 1;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }
    gallery.src = imgs[currentIndex];
}

// console.log(title.innerText);
// console.log(title.innerHTML);
// console.log(allPTags);
// console.log(redBg);
// allPTags[2].classList.remove("red-bg");
// allPTags[2].classList.add("blue-bg");
// console.log(allPTags[1].classList.contains("red-bg"));