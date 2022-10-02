import Block from '../../core/Block';

import '../../sass/style.scss';


interface ButtonProps {
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({text, onClick}: ButtonProps) {
    super({text, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="btn">
        <button class="btn__btn" type="button">{{text}}</button>
      </div>
    `;
  }
}
