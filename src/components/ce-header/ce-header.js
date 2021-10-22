class Header extends HTMLElement {
  constructor() {
    super();
    this.style.boxSizing = 'border-box';
    let template = document.getElementById('header');
    this.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    let num = this.getAttribute('num');
    let logo = this.getElementsByClassName('header__logo')[0];
    let aTagList = this.getElementsByTagName('a');
    let navLinkList = this.getElementsByClassName('nav__link');
    let timing = {
      duration: 200,
      easing: 'ease-out',
      fill: 'both',
      iterations: 1
    };
    let navAnimation = [];
    if (num == 0) {
      logo.style.backgroundImage = 'url(/src/images/logo_3x_white.png)';
      for (let i = 0; i < aTagList.length; i++) {
        aTagList[i].style.color = '#ffffff';
      }
      for (let i = 0; i < navLinkList.length; i++) {
        navLinkList[i].style.color = '#ffffff';

        navAnimation.push(new Animation(new KeyframeEffect(navLinkList[i], [{
              boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.3),' +
              'inset 0 0 20px 10px rgba(0, 0, 0, 0.3)'
            }, {
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0),' +
              'inset 0 0 10px 0 rgba(0, 0, 0, 0)'
            }
          ],
        timing)));

        navLinkList[i].addEventListener('mouseenter', () => {
          navAnimation[i].reverse();
        });
        navLinkList[i].addEventListener('mouseleave', () => {
          navAnimation[i].reverse();
        });
      }
    }

    else {
      this.getElementsByClassName('account__item')[0].style.borderColor = 'rgba(0, 0, 0, 0.2)';
      for (let i = 0; i < navLinkList.length; i++) {
        if (i + 1 == num) {
          navLinkList[i].style.color = '#3666ca';
          navAnimation.push(null);
        }

        else {
          navAnimation.push(new Animation(new KeyframeEffect(navLinkList[i], [{
                color: '#88caff'
              }, {
                color: '#000000'
              }
            ],
          timing)));

          navLinkList[i].addEventListener('mouseenter', () => {
            navAnimation[i].reverse();
          });
          navLinkList[i].addEventListener('mouseleave', () => {
            navAnimation[i].reverse();
          });
        }
      }
    }
  }
}

export function header_define() {
  customElements.define('ce-header', Header);
};