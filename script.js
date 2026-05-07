// #region Photocollection //
const photos_1 = document.getElementById("image_collection");

for (let i = 0; i < 12; i++){

const item = document.createElement("div");

item.classList.add("image_collection");

const img = document.createElement("img");

img.src = `./assets/img/${i}.jpg`;
img.width = 150; 
img.height = 150;

item.appendChild(img);

photos_1.appendChild(item);}
// #endregion //

// #region button //

const dialogRef = document.getElementById("overlay");

let headerRef = document.getElementById("overlay_header");
let sectionRef = document.getElementById("overlay_section");
let footerRef = document.getElementById("overlay_footer");

function showImg(index){
    dialogRef.showModal();

    headerRef.innerHTML = /*html*/`
        <p class="jdm">${arrImage_collection[index]}</p>
    `
    sectionRef.innerHTML = /*html*/`
        <div class="japan_imgs">
            <img src="./assets/img/${arrImage_collection[index]}.jpg" alt="">
        </div>
    `
}

function closeOverlayPopup(){
    dialogRef.close();
}
// #endregion //
