// ! querySelector
// var el = document.querySelector(".myclass");

// button.addEventListener('click',()=>{

//     const main = document.querySelector('main')
//     console.log(main, 'Элемент с тегом main')
//     console.log(main.classList)

// // ? Условие

//     if(main.classList.length > 0){
//         main.className+='white'
//     }
//     else {
//         main.className+='black'
//     }

// })

// button.addEventListener('click',()=>{

//     console.log('ПРИВЕТ!!!!!!!')
// })

//  ! querySelectorAll

// button.addEventListener("click", () => {
// const cardsList = document.querySelectorAll(".sneaker");

// console.log(cardsList)

// ? Цикл

//   let i = 0;
//   while (i < cardsList.length) {
//         cardsList[i].style.display = "none";
//         i++
//   }

// for(let i = 0; i < cardsList.length; i++){
//     cardsList[i].style.display = "none";
// }

// // ? Интервал
//   let i = 0
//   setInterval(()=>{
//     if(i < cardsList.length){
//         cardsList[i].className = "redTextSneaker";
//         // cardsList[time].style.display='none'
//         console.log(`time ${i}` )
//         i+=1
//     }
//     else clearInterval()
//   },500)

// });

// ! getElementById

// button.addEventListener('click',()=>{
//     const stoneSage = document.getElementById('stoneSage')
//     console.log(stoneSage, 'Элемент с id stoneSage')
// //? Функция

//     function changeText(element, text){
//         // element.innerText=`${text}`
//       element.textContent=`${text}`
//     }

//     changeText(stoneSage, 'КРОССОВКИ')

// })

//! removeChild()

// button.addEventListener('click',()=>{

//     const parent = document.getElementById("sneaker-info");

//     const child1 = document.getElementById("stoneSage");
//     const child2 = document.getElementById('h3Stone')

//     parent.removeChild(child2);

// })

//! appendChild

// button.addEventListener('click',()=>{
//     const parent = document.getElementById("sneaker-info");

//     const child = document.createElement("button");
//     const child2 = document.createElement('h1')
//     child.innerText = 'Добавили кнопочку'
//     child2.textContent = 'Заголовок1'

//     // console.log(parent, child)
//     parent.appendChild(child2);

// })

//! replaceChild(new, old)

// button.addEventListener('click',()=>{

//     const parent = document.getElementById("sneaker-info");

//     const oldElement = document.getElementById("stoneSage");

//     const newElement = document.createElement("button");

//     newElement.innerText = 'Добавили кнопочку'

//     parent.replaceChild(newElement, oldElement)

// })

// //     const parent = document.getElementById("sneaker-info");

//     const infoText = document.createElement("h2");

//     infoText.textContent = `${info}`
//     idText.textContent = `${id}`

// //     // console.log(parent, child)
//     parent.appendChild(infoText);
//     parent.appendChild(idText);

//     // alert(`${info} и еще ${id}`)

//     // let years = prompt('Сколько вам лет?', 100);

// // alert('Вам ' + years + ' лет!')
// // let isAdmin = confirm("Вы - администратор?");

// // alert( isAdmin );

// })

// let i = 0

// if(i<3){
//     button.addEventListener('click', ()=>{
//         console.log('addEventListener',i)
//         i+=1
//     })
// }

// if(i>3){
//     button.removeEventListener('click')
// }

// const body = document.querySelector("body");
// body.onkeydown = function (event) {

// const listener = function (event) {
//     console.log('код кнопки:', event.keyCode, 'кнопка:', event.key, i);
//     i+=1
//   };

//   body.addEventListener('keydown', listener, false)

// body.removeEventListener('keydown', listener, false)

// document.querySelector("#last-key").textContent = "Вы нажали: " + event.key;}
// };
