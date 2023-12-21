const sneakers = [
  ["Адидас", "Тот настоящий человек", "./images/4.png"],
  ["НоуНейм", "Еще походит", "./images/5.png"],
  ["Найк", "Спортивное", "./images/6.png"],
];

const button = document.querySelector(".buttonChangeColor");
const form = document.querySelector("form");
const parent = document.getElementById("sneakerContainer");

showArray(sneakers)

function showArray(array){
    for(let i = 0; i< array.length; i++){
        let sneakerBlockFromArray = document.createElement("div")
        sneakerBlockFromArray.innerHTML = `<div class="sneaker">
        <img alt="adidas Yeezy Foam RNNR" src="${array[i][2]}" class="sneaker-image" />
        <div id="sneaker-info" class="sneaker-info">
            <h3 id="h3Stone">${array[i][0]}</h3>
            <p id="stoneSage">${array[i][1]}</p>
        </div>
        </div>`
        parent.appendChild(sneakerBlockFromArray);
    }
}
let cardsCount = 0
const formEvent = (e) => {
    e.preventDefault();
    const sneakerName = e.target.sneakerName.value;
    const sneakerDesc = e.target.sneakerDesc.value;
    const sneakerImg = e.target.sneakerImg.value;
  addCard(sneakerName, sneakerDesc, sneakerImg)
    form.reset();

}
form.addEventListener("submit", formEvent);

function addCard(name, description, image){
    let sneakerBlockFromArray = document.createElement("div")
    sneakerBlockFromArray.innerHTML = `<div class="sneaker">
    <img alt="adidas Yeezy Foam RNNR" src="${image}" class="sneaker-image" />
    <div id="sneaker-info" class="sneaker-info">
        <h3 id="h3Stone">${name}</h3>
        <p id="stoneSage">${description}</p>
    </div>
    </div>`
    parent.appendChild(sneakerBlockFromArray);
    cardsCount+=1
    if(cardsCount>5){
        form.removeEventListener('submit', formEvent)
    }
     
}



