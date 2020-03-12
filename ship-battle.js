// map setup
let counter = 1
let square
let clickedId
let clickedSquare
let num = 10
let cover = document.getElementById('cover')
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
let idForSquare = []
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
  // square.classList.toggle('hit-square')
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
      document.getElementById(`${i + 1}`).setAttribute('id', `${idForSquare[i + 1]}`)
    } else if(i > 99){
      // document.getElementById(`${i + 1}`).setAttribute('id', `${idForSquare[(i - 100)]}`)
    }
  }
}

function makeBoard(){
  // creates grid inside of boards
  square = document.createElement('div')
  square.className = 'square-hit-box'
  square.style = `height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: blue`
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

function airStrike(spot){
  if(spot.includes('blue')){
    console.alert('miss!')
  }
}

topInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

topFire.addEventListener('click', e => {
  let shotBoard = document.querySelectorAll(`#${coordinate}`)
  shotSquare = shotBoard[1]
  // airStrike(shotSquare)
})

bottomInput.addEventListener('keypress', e => {
  if(e.code === 'Enter'){
    coordinate = e.target.value
  }
})

bottomFire.addEventListener('click', e => {
  let shotBoard = document.querySelectorAll(`#${coordinate}`)
  shotSquare = shotBoard[0]
  // airStrike(shotSquare)
})

// makes button on the cover work
coverButton.addEventListener('click', e => {
  if(cover.style.height === '5vh'){
    cover.style.height = '100vh'
  } else {
    cover.style.height = '5vh'
  }
})