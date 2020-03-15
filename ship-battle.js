// map setup
let counter = 1
let square
let clickedClassName
let clickedSquare
let num = 10
let cover = document.getElementById('cover')
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
let classForSquare = []
let topBoard = document.getElementById('top-board')
let bottomBoard = document.getElementById('bottom-board')

// tracks button click location, changes square color
function colorizer(e){
  clickedId = e.target.id
  clickedSquare = document.getElementById(clickedId)
  if(clickedSquare.style.background.includes('blue')){
    clickedSquare.style.background = 'grey'
    console.log(clickedSquare)
  } else {
    clickedSquare.style.background = 'blue'
    console.log(clickedSquare)
  }
}

// assigning IDs to the ID array
function createClassName(){
  for(k = 0; k <=10; k++){
    for(j = 1; j <=10; j++){
      classForSquare.push(`${letters[k]}${j}`)
    }
  }
}

//assigns the correct ID to the square
function addClassName(){
  for(let i = 1; i < counter; i++){
    if(i <= 100){
      let insideText = document.getElementById(`${i}`)
      insideText.className = classForSquare[i - 1]
      insideText.innerText = insideText.className
    } else if(i > 100){
      let insideText = document.getElementById(`${i}`)
      insideText.className = classForSquare[i - 101]
      insideText.innerText = insideText.className
    }
  }
}

function makeBoard(){
  // creates grid inside of boards
  square = document.createElement('div')
  square.style = `height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: blue; color: white`
  square.id = counter
  counter++
  
  //calls colorizer function, applies to the squares
  square.addEventListener('click', e => colorizer(e))
  
  //applies squares to correct grids
  if(square.id < 101){
    topBoard.appendChild(square)
  } else {
    bottomBoard.appendChild(square)
  }
}

//makes the sqaures fill the boards
for(let i = 0; i < (num * num * 2); i++){
  makeBoard()
}

let counter2 = 1001
let square2
let topShotLog = document.getElementById('top-shot-log')
let bottomShotLog = document.getElementById('bottom-shot-log')

function makeShotLog(){
  // creates grid inside of boards
  square2 = document.createElement('div')
  square2.style = `height: 25px; width: 25px; border: 1px solid black; box-sizing: border-box; background: white`
  square2.id = counter2
  counter2++

  //applies squares to correct grids
  if(square2.id < 1101){
    topShotLog.appendChild(square2)
  } else {
    bottomShotLog.appendChild(square2)
  }
}

//makes the sqaures fill the boards
for(let i = 0; i < (num * num * 2); i++){
  makeShotLog()
}

createClassName()
addClassName()

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
  if(parseInt(spot.id) < 101){
    loggedShot = document.getElementById(parseInt(spot.id) + 1100)
    console.log(spot)
  } else {
    loggedShot = document.getElementById(parseInt(spot.id) + 900)
  }
  console.log(loggedShot)
  if(spot.style.background === 'blue'){
    alert('Miss!')
    spot.style.background = 'green'
    loggedShot.style.background = 'green'
  } else if(spot.style.background === 'grey'){
    alert('Hit!')
    spot.style.background = 'red'
    loggedShot.style.background = 'red'
  }
}

// logs and pushes which square to shoot at
topInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

topFire.addEventListener('click', e => {
  let shotBoard = document.getElementsByClassName(coordinate)
  shotSquare = shotBoard[1]
  airStrike(shotSquare)
  cover.style.opacity = '1'
})

bottomInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

bottomFire.addEventListener('click', e => {
  let shotBoard = document.getElementsByClassName(coordinate)
  let shotSquare = shotBoard[0]
  console.log(shotSquare)
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

