class Footer extends HTMLElement {
  constructor() {
    super();
    this.style.boxSizing = 'border-box';
    let template = document.getElementById('footer');
    this.append(template.content.cloneNode(true));
  }
}

export function footer_define() {
  customElements.define('ce-footer', Footer);
};