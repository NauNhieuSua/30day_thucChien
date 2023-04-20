let data = ["./day4/img1.jpeg",
"./day4/img2.jpeg",
"./day4/img3.jpeg",
"./day4/img4.jpeg",
"./day4/img5.jpeg",
"./day4/img6.jpeg",
"./day4/img7.jpeg",
"./day4/img8.jpeg"]

let pictureList = document.querySelectorAll('.picture')
let container = document.querySelector('.container')
let container1 = document.querySelector('.container1')
let container2 = document.querySelector('.container2')
console.log(container1);
pictureList.forEach((element,index)=>{
    element.setAttribute('onclick','display(event)')
    element.setAttribute('id',`${index}`)
})

function display(e) {
   let index = e.target.getAttribute('id')
   container1.classList.remove('hide')
   if(index==0){
    container1.innerHTML = `
    <div class ="display" index="${index}">
    <img  src="${data[index]}" alt="">
    <button onclick="them()" >+</button>
    <button onclick="delete1()">x</button>
    </div>
    `
   }else if(index==data.length-1){
    container1.innerHTML = `
    <div class ="display" index="${index}">
    <img  src="${data[index]}" alt="">
    <button onclick="bot()" >-</button>
    <button onclick="delete1()">x</button>
    </div>
    `
   }else {
    container1.innerHTML = `
    <div class ="display" index="${index}">
    <img  src="${data[index]}" alt="">
    <button onclick="bot()" >-</button>
    <button onclick="them()" >+</button>
    <button onclick="delete1()">x</button>
    </div>
    `
   }
}

function them() {
    let display = document.querySelector('.display')
    let indexThem = +display.getAttribute('index')
if(indexThem==data.length-2){
    container1.innerHTML = `
    <div class ="display" index="${indexThem+1}">
    <img  src="${data[indexThem+1]}" alt="">
    <button onclick="bot()" >-</button>
    <button onclick="delete1()">x</button>
    </div>
    `
}else{
    container1.innerHTML = `
    <div class ="display" index="${indexThem+1}">
    <img  src="${data[indexThem+1]}" alt="">
    <button onclick="bot()" >-</button>
    <button onclick="them()" >+</button>
    <button onclick="delete1()">x</button>
    </div>
    `
} 
}

function bot() {
    let display = document.querySelector('.display')
    let indexBot = +display.getAttribute('index')
if(indexBot==1){
    container1.innerHTML = `
    <div class ="display" index="${indexBot-1}">
    <img  src="${data[indexBot-1]}" alt="">
    <button onclick="them()" >+</button>
    <button onclick="delete1()">x</button>
    </div>
    `
}else{
    container1.innerHTML = `
    <div class ="display" index="${indexBot-1}">
    <img  src="${data[indexBot-1]}" alt="">
    <button onclick="bot()" >-</button>
    <button onclick="them()" >+</button>
    <button onclick="delete1()">x</button>
    </div>
 `
} 
}
function delete1() {
    container1.classList.add('hide')
}