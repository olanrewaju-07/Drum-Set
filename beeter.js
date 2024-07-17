// FIRSTLY , creating an array fot the picture backgroun

const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheseburger',
    img: 'images/cheseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot dog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  { 
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheseburger',
    img: 'images/cheseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot dog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  { 
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
 
]

cardArray.sort(() => 0.5 - Math.random());

// now let the grap the id that we created in the html and used a name to save it
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let  cardsChosen = []
let  cardsChosenId = []
const cardsWon = []

// Now create a function that have for loop to create an element

function createBoard (){
  for (i= 0; i < cardArray.length; i++){
    const card = document.createElement('img');
     card.setAttribute('src', 'images/blank.jpg');
     card.setAttribute('data-id', i);
     gridDisplay.appendChild(card)
     card.style.width = '300px';
     card.style.height = '250px';
     card.addEventListener('click', flipCard);
  }
}

function checkMate (){

  const cards = document.querySelectorAll('img')
  const optionOneId  =cardsChosenId[0]
  const optionTwoId  = cardsChosenId[1]
     if (optionOneId === optionTwoId){
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId ].setAttribute('src', 'images/blank.jpg');
      alert('You have clicked the same image.')
     }
  
   if(cardsChosen[0] === cardsChosen[1]){
      alert('I found a match'); 
      cards[cardsChosenId[0]].setAttribute('src', 'images/white.jpg'); 
      cards[cardsChosenId[1]].setAttribute('src', 'images/white.jpg');
      cards[cardsChosenId[0]].removeEventListener('click', flipCard);
      cards[cardsChosenId[1]].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId ].setAttribute('src', 'images/blank.jpg');
      alert('Sorry.. Try aagain!');
    }
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = []
    cardsChosenId = []

    if (cardsWon.length === cardArray.length/2){
      resultDisplay.innerHTML = '.Congratulation You Won';
    }
     
}
createBoard();
// WE HAVE TO CREATE A FUNCTION FOR THE ADDEVENTLISTNER AND ALSO GETATTRIBUTE

function flipCard(){
  const cardId= this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   this.setAttribute('src', cardArray[cardId].img)
   cardsChosenId.push(cardId)
  console.log(cardsChosen)
  console.log('clicked', cardId)
  setTimeout(checkMate, 400);
}