import {header_define} from '../../components/ce-header/ce-header.js'
import {footer_define} from '../../components/ce-footer/ce-footer.js'
import {card_define} from '../../components/ce-card/ce-card.js'

header_define();
footer_define();
card_define();

let carousel = document.getElementById('carousel__visible');
let carouselList = carousel.getElementsByTagName('ce-card');
let leftButton = document.getElementById('carousel__left');
let rightButton = document.getElementById('carousel__right')
let firstCard = null;
let lastCard = null;
let newCard = null;

let button = document.getElementsByClassName('description__button')[0]
let timing = {
  duration: 200,
  easing: 'ease-out',
  fill: 'both',
  iterations: 1
};
let buttonAnimation = new Animation(new KeyframeEffect(button, [{
      backgroundColor: 'rgba(0, 19, 60, 0.7)'
    }, {
      backgroundColor: 'rgba(0, 19, 60, 1)'
    }
  ],
timing));

/*
  왼쪽 버튼을 눌렀을 때 마지막 카드를 복사해서 처음에 넣고
  margin-left가 -(width)부터 0까지 변하도록 애니메이션을 설정
*/
function prepend() {
  leftButton.removeEventListener('click', prepend);
  lastCard = carousel.lastElementChild;
  newCard = lastCard.cloneNode(false);
  newCard.contentText = lastCard.contentText;
  newCard.addEventListener('animationend', () => {
    lastCard.remove();
    newCard.classList.remove('visible__prepend');
    leftButton.addEventListener('click', prepend);
  });
  newCard.classList.add('visible__prepend');
  carouselList[0].setAttribute('color', 'blue');
  carouselList[1].setAttribute('color', 'white');
  carousel.prepend(newCard);
}

/*
  오른쪽 버튼을 눌렀을 때 첫 카드를 복사해서 마지막에 넣고
  첫 카드의 margin-left가 0부터 -(width)까지 변하도록 애니메이션을 설정
*/
function append() {
  rightButton.removeEventListener('click', append);
  firstCard = carousel.firstElementChild;
  newCard = firstCard.cloneNode(false);
  newCard.contentText = firstCard.contentText;
  firstCard.addEventListener('animationend', () => {
    firstCard.remove();
    rightButton.addEventListener('click', append);
  });
  firstCard.classList.add('visible__append');
  carouselList[1].setAttribute('color', 'white');
  carouselList[2].setAttribute('color', 'blue');
  carousel.append(newCard);
}

for (let i = 0; i < carouselList.length; i++) {
  if (i == 1) {
    carouselList[i].setColor('blue');
    carouselList[i].style.opacity = '1';
  }
  else {
    carouselList[i].setColor('white');
    carouselList[i].style.opacity = '0.5';
  }
}

leftButton.addEventListener('click', prepend);
rightButton.addEventListener('click', append);

button.addEventListener('mouseenter', () => {
  buttonAnimation.reverse();
});
button.addEventListener('mouseleave', () => {
  buttonAnimation.reverse();
});