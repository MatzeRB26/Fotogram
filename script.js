// #region Photocollection //
const gallery = document.getElementById("image_collection");

for (let i = 0; i < 12; i++){

const item = document.createElement("div");

item.classList.add("collection_img");

const img = document.createElement("img");
img.alt = `Photo ${i + 1}`;

img.src = `./assets/img/${i}.jpg`;
img.width = 150; 
img.height = 150;

item.appendChild(img);

gallery.appendChild(item);}

// #endregion //

const overlay = document.getElementById("overlay");
let currentImageIndex = 0;
const overlayPopup = document.getElementById("overlay_popup");
const overlayTitle = document.getElementById("overlay_title");
const closeButton = document.getElementById("close_button");
const overlayContentImg = document.getElementById("overlay_content_img");
const counter = document.getElementById("counter");
const image = document.querySelectorAll(".image_collection img");
const nextButton = document.getElementById("nextbutton");
const backButton = document.getElementById("backbutton");

function updateOverlayPopup() { 
    const currentImage = image[currentImageIndex];
    overlayContentImg.src = currentImage.src;
    overlayTitle.innerText = currentImage.alt;
    counter.innerText =
    `${currentImageIndex + 1} / ${image.length}`;
}

image.forEach((image, index) => { 

    image.addEventListener("click", () => {
        overlayContentImg.src = image.src; 
        overlayTitle.innerText = image.alt; 
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

nextButton.addEventListener("click", () => { 
    currentImageIndex++;
    if (currentImageIndex >= image.length) {
        currentImageIndex = 0;
    }

    updateOverlayPopup();
    console.log(nextButton);
});

backButton.addEventListener("click", () => { 
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = image.length - 1;
    }

    updateOverlayPopup();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.style.display = "none";
    }
});

// const lightbox = document.createElement("div");
// lightbox.id = "lightbox";
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll("img");
// images.forEach((image) => {
//     image.addEventListener("click", (e) => {
//         lightbox.classList.add("active");
//         const img = document.createElement("img");
//         img.src = image.src;
//         while (lightbox.firstChild) {
//         lightbox.removeChild(lightbox.firstChild);
//         }
//         lightbox.appendChild(img);
//     });
// });

// lightbox.addEventListener("click", (e) => {
//     if (e.target !== e.currentTarget) return;
//     lightbox.classList.remove("active");
// });

// #region button //

// const dialogRef = document.getElementById("overlay_dialog");

// function openDialog(){
//         dialogRef.showModal();
//     }

//     function closeDialog(){
//     dialogRef.close();
// }

// const img = [
// "assets/img/0.jpg",
// "assets/img/1.jpg",
// "assets/img/2.jpg",
// "assets/img/3.jpg",
// "assets/img/4.jpg",
// "assets/img/5.jpg",
// "assets/img/6.jpg",
// "assets/img/7.jpg",
// "assets/img/8.jpg",
// "assets/img/9.jpg",
// "assets/img/10.jpg",
// "assets/img/11.jpg"];

// const image_collection = document.getElementById("image_collection");

// function renderImg(){
//     for (let i = 0; i < img.length; i++){ 
//         image_collection.innerHTML += `<img onclick = "openDialog()" src="${img[i]}">`;
//         }
//         }

//         renderImg();

// #endregion //

