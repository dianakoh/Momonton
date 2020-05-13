const body = document.querySelector("body"),
    imageInfoContainer = document.querySelector(".js-imageInfo span");

const IMG_NUMBER = 5;

const imgData = [
    {name: 1, description: "Photo by Becca Tapert on Unsplash"},
    {name: 2, description: "Photo by Carlos Lindner on Unsplash"},
    {name: 3, description: "Photo by Chinh Le Duc on Unsplash"},
    {name: 4, description: "Photo by Nathan Dumlao on Unsplash"},
    {name: 5, description: "Photo by Nihal Demirci on Unsplash"}
]
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

    const imgInfo = imgData.filter(function(img){
        return img.name === imgNumber+1;
    });

    imageInfoContainer.innerText = imgInfo[0].description;

}
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumer = genRandom();
    paintImage(randomNumer);
}

init();