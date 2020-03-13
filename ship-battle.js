// map setup
let counter = 1
let square
let clickedClassName
let clickedSquare
let num = 10
let cover = document.getElementById('cover')
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
let idForSquare = []
let topBoard = document.getElementById('top-board')
let bottomBoard = document.getElementById('bottom-board')

// tracks button click location, changes square color
function colorizer(e){
  clickedClassName = e.target.className
  clickedSquare = document.getElementsByClassName(clickedClassName)
  if(clickedSquare[0].style.background.includes('blue')){
    clickedSquare[0].style.background = 'grey'
  } else {
    clickedSquare[0].style.background = 'blue'
  }
}

// assigning IDs to the ID array
function createId(){
  for(k = 0; k <=10; k++){
    for(j = 1; j <=10; j++){
      idForSquare.push(`${letters[k]}${j}`)
    }
  }
}

//assigns the correct ID to the square
function addId(){
  for(let i = 0; i < counter - 1; i++){
    if(i <= 99){
      let insideText = document.getElementsByClassName(`${i + 1}`)[0]
      insideText.setAttribute('id', `${idForSquare[i]}`)
      insideText.innerText = insideText.id
    } else if(i > 99){
      let insideText = document.getElementsByClassName(`${i + 1}`)[0]
      insideText.setAttribute('id', `${idForSquare[(i - 100)]}`)
      insideText.innerText = insideText.id
    }
  }
}

function makeBoard(){
  // creates grid inside of boards
  square = document.createElement('div')
  square.style = `height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: blue; color: white`
  square.className = counter
  counter++
  
  //calls colorizer function, applies to the squares
  square.addEventListener('click', e => colorizer(e))
  
  //applies squares to correct grids
  if(square.className < 101){
    topBoard.appendChild(square)
  } else {
    bottomBoard.appendChild(square)
  }
}

//makes the sqaures fill the boards
for(let i = 0; i < (num * num * 2); i++){
  makeBoard()
}

let counter2 = 1000
let square2
let topShotLog = document.getElementById('top-shot-log')
let bottomShotLog = document.getElementById('bottom-shot-log')

function makeShotLog(){
  // creates grid inside of boards
  square2 = document.createElement('div')
  square2.className = 'square-shot-log'
  square2.style = `height: 25px; width: 25px; border: 1px solid black; box-sizing: border-box; background: white`
  square2.className = counter2
  counter2++

  //applies squares to correct grids
  if(square2.className < 1100){
    topShotLog.appendChild(square2)
  } else {
    bottomShotLog.appendChild(square2)
  }
}

//makes the sqaures fill the boards
for(let i = 0; i < (num * num * 2); i++){
  makeShotLog()
}

createId()
addId()

// registers which square is shot and when to log hit or miss

let topInput = document.querySelector('.top-input')
let topFire = document.getElementById('top-fire')
let bottomInput = document.querySelector('.bottom-input')
let bottomFire = document.getElementById('bottom-fire')
let coverButton = document.getElementById('cover-button')
let coordinate
let shotSquare
let loggedShot

function airStrike(spot){
  if(parseInt(spot.className) < 101){
    loggedShot = document.getElementsByClassName(parseInt(spot.className) + 1099)
  } else {
    loggedShot = document.getElementsByClassName(parseInt(spot.className) + 899)
  }
  console.log(loggedShot)
  if(spot.style.background === 'blue'){
    alert('Miss!')
    spot.style.background = 'green'
    loggedShot[0].style.background = 'green'
  } else if(spot.style.background === 'grey'){
    alert('Hit!')
    spot.style.background = 'red'
    loggedShot[0].style.background = 'red'
  }
}

// logs and pushes which square to shoot at
topInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

topFire.addEventListener('click', e => {
  let shotArray = document.querySelectorAll(`#${coordinate}`)
  let shotSquare = shotArray[1]
  airStrike(shotSquare)
  cover.style.opacity = '1'
})

bottomInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

bottomFire.addEventListener('click', e => {
  let shotArray = document.querySelectorAll(`#${coordinate}`)
  let shotSquare = shotArray[0]
  airStrike(shotSquare)
  cover.style.opacity = '1'
})

// makes button on the cover work
coverButton.addEventListener('click', e => {
  if(cover.style.height === '100vh'){
    cover.style.opacity = '0'
  } else {
    cover.style.height = '100vh'
  }
})

