let cardsArray = [
    {
        'name': 'CSS',
        'img': 'css/css.png',
    },
    {
        'name': 'HTML',
        'img': 'css/html.png',
    },
    {
        'name': 'jQuery',
        'img': 'css/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'css/js.png',
    },
    {
        'name': 'Java',
        'img': 'css/java.png',
    },
    {
        'name': 'Python',
        'img': 'css/python.png',
    }
];

const parentDiv = document.querySelector('#card-section');

const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)


let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount=0;
let firstCard = "";
let secondCard="";

const card_matches=() =>{
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currElem) => {
     currElem.classList.add('card_match')
    })
}

const resetGame = ()=>{
    firstCard="";
    secondCard="";
    clickCount=0;

    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currElem) => {
        currElem.classList.remove('card_selected')
    })
}

parentDiv.addEventListener('click', (event) => {
        let currCard = event.target;
    if(currCard.id==="card-section"){
        return false;
    }

        clickCount++;
        if(clickCount<3){
            if(clickCount===1){
                firstCard=currCard.parentNode.dataset.name;
                currCard.parentNode.classList.add(`card_selected`);
            }else{
                secondCard =currCard.parentNode.dataset.name;
                currCard.parentNode.classList.add(`card_selected`);
            }
            if(firstCard!="" && secondCard!=""){
                if(firstCard===secondCard){
                    //currCard.classList.add(`card_match`)
                    setTimeout(()=>{
                        card_matches()
                        resetGame()
                    }, 1000)

                }else{
                    setTimeout(()=>{
                        resetGame()
                    }, 1000)
                }
            }
        }

})

for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage=`url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')
    // back_div.style.transform = "rotateY(180deg)";
    back_div.style.backgroundImage=`url(${shuffledChild[i].img})`;


    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}