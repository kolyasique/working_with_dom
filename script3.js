{
  /* <div class="sneaker">
    <img alt="adidas Yeezy Foam RNNR" src="${image}" class="sneaker-image" />
    <div id="sneaker-info" class="sneaker-info">
        <h3 id="h3Stone">${name}</h3>
        <p id="stoneSage">${description}</p>
    </div>
    </div> */
}

//! Из массива добавляем карточки на страницу

// const sneakerArray = [
//   ["Адидас", "Удобный", "./images/1.png"],
//   ["Nike", "Спортивный", "./images/2.png"],
//   ["reebok", "Практичный", "./images/3.png"],
// ];

const sneakerArrayObject = [
  { name: "Адидас", description: "Удобный", image: "./images/1.png" },
  { name: "2Адидас", description: "2Удобный", image: "./images/2.png" },
  { name: "3Адидас", description: "3Удобный", image: "./images/3.png" },
];

const sneakerContainer = document.querySelector("#sneakerContainer");

function showCards(array) {
  for (let i = 0; i < array.length; i++) {
    let newElement = document.createElement("div");
    newElement.innerHTML = `<div class="sneaker">
        <img alt="adidas Yeezy Foam RNNR" src="${array[i].image}" class="sneaker-image" />
        <div id="sneaker-info" class="sneaker-info">
            <h3 id="h3Stone">${array[i].name}</h3>
            <p id="stoneSage">${array[i].description}</p>
        </div>
        </div>`;
    sneakerContainer.appendChild(newElement);
  }
}

showCards(sneakerArrayObject);

//! С помощью инпутов бeз формы

const button = document.querySelector("#inputBtn");
button.addEventListener("click", addCard);

function addCard() {
  const inputName = document.querySelector("#inputName");
  const inputDesc = document.querySelector("#inputDesc");
  const inputImg = document.querySelector("#inputImg");

  if (inputName.value && inputDesc.value) {
    let newElement = document.createElement("div");

    newElement.innerHTML = `<div class="sneaker">
        <img alt="${inputName.value + inputDesc.value}" src="${
      inputImg.value
    }" class="sneaker-image" />
        <div id="sneaker-info" class="sneaker-info">
            <h3 id="h3Stone">${inputName.value}</h3>
            <p id="stoneSage">${inputDesc.value}</p>
        </div>
        </div>`;
    sneakerContainer.appendChild(newElement);
    inputName.value = "";
    inputDesc.value = "";
    inputImg.value = "";
  }
}

//! Вариант с добавлением карточки формой

const form = document.querySelector("form");

const addCardWithForm = (e) => {
  e.preventDefault();

  const sneakerName = e.target.sneakerName.value;
  const sneakerDesc = e.target.sneakerDesc.value;
  const sneakerImg = e.target.sneakerImg.value;

  let newElement = document.createElement("div");
  newElement.innerHTML = `<div class="sneaker">
        <img alt="${sneakerImg}" src="${sneakerImg}" class="sneaker-image" />
        <div id="sneaker-info" class="sneaker-info">
            <h3 id="h3Stone">${sneakerName}</h3>
            <p id="stoneSage">${sneakerDesc}</p>
        </div>
        </div>`;
  sneakerContainer.appendChild(newElement);

  form.reset();
};

form.addEventListener("submit", addCardWithForm);
