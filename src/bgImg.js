const imgs =[
    "dewdrops.jpg",
    "ocean.jpg",
    "orange.jpg",
    "sunflowers.jpg",
    "waterfall.jpg",
]

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img")
bgImg.src = `/img/${randomImg}`

document.body.prepend(bgImg);
