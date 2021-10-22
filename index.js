import {header_define} from '/src/components/ce-header/ce-header.js'
import {footer_define} from '/src/components/ce-footer/ce-footer.js'

header_define();
footer_define();

let buttonList = document.getElementsByClassName('front__button');

let timing = {
  duration: 200,
  easing: 'ease-out',
  fill: 'both',
  iterations: 1
};

let animateButtonWhite = new Animation(new KeyframeEffect(buttonList[0], [{
      color: '#ffffff',
      backgroundColor: 'transparent'
    }, {
      color: '#0c3d91',
      backgroundColor: '#ffffff'
    }
  ],
timing));

let animateButtonBlue = new Animation(new KeyframeEffect(buttonList[1], [{
      color: '#0c3d91',
      backgroundColor: '#ffffff'
    }, {
      color: '#ffffff',
      backgroundColor: 'transparent'
    }
  ],
timing));

buttonList[0].addEventListener('mouseenter', () => {
  animateButtonWhite.reverse()
});
buttonList[0].addEventListener('mouseleave', () => {
  animateButtonWhite.reverse()
});

buttonList[1].addEventListener('mouseenter', () => {
  animateButtonBlue.reverse()
});
buttonList[1].addEventListener('mouseleave', () => {
  animateButtonBlue.reverse()
});