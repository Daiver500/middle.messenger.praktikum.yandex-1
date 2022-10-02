import Block from '../../core/Block';

export class ErrorPage404 extends Block {

  render() {

    // language=hbs
    return `
    {{#Layout name="Error" }}

    {{{Title
      text="404"
      class="title"
      mod="title--big"
    }}}

    {{{Title
      text="Не туда попали"
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

