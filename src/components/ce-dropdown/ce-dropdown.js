class DropDown extends HTMLElement {
  constructor() {
    super();
    this.style.boxSizing = 'border-box';
    this.question = this.getAttribute('question');
    this.content = this.innerHTML;
    this.innerHTML = '';
    let template = document.getElementById('dropdown');
    this.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    let content = this.getElementsByClassName('dropdown__content')[0];
    let timing = {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'both',
      iterations: 1
    };
    this.getElementsByClassName('dropdown__question')[0].innerText = this.question;
    content.innerHTML = this.content;
    this.animationMain = new Animation(new KeyframeEffect(this, [{
          height: `${65 + content.clientHeight}px`,
          backgroundColor: '#fdfdfd'
        }, {
          height: '65px',
          backgroundColor: '#ffffff'
        }
      ],
    timing));
    this.animationIndicator = new Animation(new KeyframeEffect(
      this.getElementsByClassName('dropdown__vertical-bar')[0], [{
          height: '2px'
        }, {
          height: '24px'
        }
      ],
    timing));
    this.getElementsByClassName('dropdown__visible')[0].addEventListener('click', () => {
      this.animationMain.reverse();
      this.animationIndicator.reverse();
    });
  }
}

export function dropdown_define() {
  customElements.define('ce-dropdown', DropDown);
};