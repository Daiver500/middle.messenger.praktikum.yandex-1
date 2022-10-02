import Block from '../../core/Block';

import '../../sass/style.scss';

interface TitleProps {
  text: string;
  class: string;
  mod: string;
}

export class Title extends Block {
  constructor(props: TitleProps) {
    super({...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="">
        <h1 class="{{class}} {{mod}}">{{text}}</h1>
      </div>
    `;
  }
}
