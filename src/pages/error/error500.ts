import Block from '../../core/Block';

export class ErrorPage500 extends Block {

  render() {

    // language=hbs
    return `
    {{#Layout name="Error" }}

    {{{Title
      text="500"
      class="title"
      mod="title--big"
    }}}

    {{{Title
      text="Мы уже фиксим"
      class="title"
    }}}

    {{{Link
      to="#"
      text="Назад к чатам"
    }}}

  {{/Layout}}
    `;
  }
}
