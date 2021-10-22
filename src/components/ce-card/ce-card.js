class Card extends HTMLElement {
  constructor() {
    super();
    this.style.boxSizing = 'border-box';
    this.color = this.getAttribute('color');
    this.ratingNumber = this.getAttribute('rating');
    this.crewSchoolText = this.getAttribute('crew_school');
    this.crewNameText = this.getAttribute('crew_name');
    this.subjectText = this.getAttribute('subject');
    this.coxNameText = this.getAttribute('cox_name');
    this.contentText = this.innerHTML;
    this.innerHTML = '';
    let template = document.getElementById('card');
    this.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.rating = this.getElementsByClassName('card__rating')[0];
    this.crewSchool = this.getElementsByClassName('crew__school')[0];
    this.crewName = this.getElementsByClassName('crew__name')[0];
    this.subject = this.getElementsByClassName('cox__subject')[0];
    this.coxName = this.getElementsByClassName('cox__name')[0];
    this.content = this.getElementsByClassName('card__content')[0];

    this.rating.innerHTML = '<img class="rating__star" src="/src/images/_star.png" alt="별"/>'.repeat(this.ratingNumber);
    this.crewSchool.innerText = this.crewSchoolText;
    this.crewName.innerText = this.crewNameText;
    this.subject.innerText = this.subjectText;
    this.coxName.innerText = `${this.coxNameText} 콕스`;
    this.content.innerHTML = this.contentText;
    this.setColor(this.color);

    let timing = {
      duration: 500,
      easing: 'ease-out',
      fill: 'none',
      iterations: 1
    };

    this.blueToWhite = [
      new Animation(new KeyframeEffect(this, [{
          backgroundColor: '#ffffff',
          opacity: '0.5'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.crewSchool, [{
          color: '#000000',
          borderRightColor: '#ededed'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.crewName, [{
          color: '#000000'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.subject, [{
          color: '#3666ca'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.coxName, [{
          color: '#000000'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.content, [{
          color: '#898989'
        }],
      timing))
    ];

    this.whiteToBlue = [
      new Animation(new KeyframeEffect(this, [{
          backgroundColor: '#3666ca',
          opacity: '1'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.crewSchool, [{
          color: '#ffffff',
          borderRightColor: 'rgba(255, 255, 255, 0.15)'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.crewName, [{
          color: '#ffffff'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.subject, [{
          color: '#ffffff'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.coxName, [{
          color: '#00133c'
        }],
      timing)),
      new Animation(new KeyframeEffect(this.content, [{
          color: '#ffffff'
        }],
      timing))
    ];

    this.blueToWhite[0].onfinish = () => {
      this.style.opacity = '0.5';
      this.setColor('white');
    };
    this.whiteToBlue[0].onfinish = () => {
      this.style.opacity = '1';
      this.setColor('blue');
    };
  }

  static get observedAttributes() {
    return ['color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.color = newValue;
    if ((oldValue == 'blue') && (newValue == 'white')) {
      for (let i = 0; i < 6; i++){
        this.blueToWhite[i].play();
      }
    }
    else if ((oldValue == 'white') && (newValue == 'blue')) {
      for (let i = 0; i < 6; i++){
        this.whiteToBlue[i].play();
      }
    }
  }

  setColor(color) {
    this.setAttribute('color', color);
    this.color = color;
    if (color == 'blue') {
      this.style.backgroundColor = '#3666ca';
      this.crewSchool.style.color = '#ffffff';
      this.crewSchool.style.borderRightColor = 'rgba(255, 255, 255, 0.15)';
      this.crewName.style.color = '#ffffff';
      this.subject.style.color = '#ffffff';
      this.coxName.style.color = '#00133c';
      this.content.style.color = '#ffffff';
    }

    else if (color == 'white') {
      this.style.backgroundColor = '#ffffff';
      this.crewSchool.style.color = '#000000';
      this.crewSchool.style.borderRightColor = '#ededed';
      this.crewName.style.color = '#000000';
      this.subject.style.color = '#3666ca';
      this.coxName.style.color = '#000000';
      this.content.style.color = '#898989';
    }
  }
}

export function card_define() {
  customElements.define('ce-card', Card);
};