const photos = document.getElementById("image_collection");

for (let i = 1; i < 12; i++){

const item = document.createElement("div");

item.classList.add("collection");


const img = document.createElement("img");

img.src = `./assets/img/${i}.jpg`;
img.width = 150; 
img.height = 150;

item.appendChild(img);

photos.appendChild(item);
}


// "./assets/img/370z_drift.jpg"
// "./assets/img/engine_rb26.jpg"
// "./assets/img/fish_koi.jpg"
// "./assets/img/nissan_370z.jpg"
// "./assets/img/nissan_r32.jpg"
// "./assets/img/nissan_r33.jpg"
// "./assets/img/nissan_r34.jpg"
// "./assets/img/tokyo_bridge.jpg"
// "./assets/img/tokyo_fuji.jpg"
// "./assets/img/tokyo_night.jpg"
// "./assets/img/tokyo_shibuya.jpg"
// "./assets/img/tokyo_skyline.jpg"

