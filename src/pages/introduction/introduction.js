import {header_define} from '../../components/ce-header/ce-header.js'
import {footer_define} from '../../components/ce-footer/ce-footer.js'

header_define();
footer_define();


let buttonList = document.getElementsByTagName('button');

let timing = {
  duration: 200,
  easing: 'ease-out',
  fill: 'both',
  iterations: 1
};

let animateButtonIndividual = new Animation(new KeyframeEffect(buttonList[0], [{
      backgroundColor: 'rgba(54, 102, 202, 0.7)'
    }, {
      backgroundColor: 'rgba(54, 102, 202, 1)'
    }
  ],
timing));

let animateButtonApply = new Animation(new KeyframeEffect(buttonList[2], [{
      backgroundColor: 'rgba(0, 19, 60, 0.7)'
    }, {
      backgroundColor: 'rgba(0, 19, 60, 1)'
    }
  ],
timing));

let animateButtonsApply = [];
for (let i = 0; i < 4; i++) {
  animateButtonsApply.push(new Animation(new KeyframeEffect(buttonList[i + 3], [{
      boxShadow: 'inset 0 0 0 100px rgba(0, 0, 0, 0.3)'
    }, {
      boxShadow: 'inset 0 0 0 100px rgba(0, 0, 0, 0)'
    }
  ],
  timing)));

  buttonList[i + 3].addEventListener('mouseenter', () => {
    animateButtonsApply[i].reverse()
  });
  buttonList[i + 3].addEventListener('mouseleave', () => {
    animateButtonsApply[i].reverse()
  });
}

buttonList[0].addEventListener('mouseenter', () => {
  animateButtonIndividual.reverse()
});
buttonList[0].addEventListener('mouseleave', () => {
  animateButtonIndividual.reverse()
});

buttonList[2].addEventListener('mouseenter', () => {
  animateButtonApply.reverse()
});
buttonList[2].addEventListener('mouseleave', () => {
  animateButtonApply.reverse()
});