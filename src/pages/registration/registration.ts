import Block from '../../core/Block';

export class RegistrationPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
        email: '',
      },
      errors: {
        login: '',
        password: '',
        email: '',
      },
      onLogin: () => {
        const loginData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
          email: (this.refs.password.firstElementChild as HTMLInputElement).value
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
            email: '',
          },
          values: { ...loginData },
        };

        if (!loginData.login) {
          nextState.errors.login = 'Login is required';
        } else if (loginData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        }

        if (!loginData.password) {
          nextState.errors.password = 'Password is required';
        }

        if (!loginData.email) {
          nextState.errors.email = 'Email is required';
        }

        this.setState(nextState);

        console.log('action/login', loginData);
      }
    }
  }

  render() {
    const { errors, values } = this.state;

    // language=hbs
    return `
    {{#Layout name="Login" }}

    <form class="login-form form">

      {{{Title
        text="Регистрация"
        class="title"
        mod=""
      }}}

      {{{Input
        value="${values.email}"
        error="${errors.email}"
        ref="email"
        id="email"
        type="email"
        placeholder="Почта"
      }}}

      {{{Input
        value="${values.login}"
        error="${errors.login}"
        ref="login"
        id="login"
        type="text"
        placeholder="Логин"
      }}}

      {{{Input
        value=""
        error=""
        ref="name"
        id="name"
        type="text"
        placeholder="Имя"
      }}}

      {{{Input
        value=""
        error=""
        ref="surname"
        id="surname"
        type="text"
        placeholder="Фамилия"
      }}}

      {{{Input
        value=""
        error=""
        ref="phone"
        id="login"
        type="tel"
        placeholder="Телефон"
      }}}

      {{{Input
        value="${values.password}"
        error="${errors.password}"
        ref="password"
        id="password"
        type="password"
        placeholder="Пароль"
      }}}

      {{{Input
        value="${values.password}"
        error="${errors.password}"
        ref="password"
        id="password"
        type="password"
        placeholder="Пароль (ещё раз)"
      }}}

      {{{Button
        text="Зарегистрироваться"
        onClick=onLogin
      }}}

      {{{Link
        to="#"
        text="Войти"
      }}}
    </form>
  {{/Layout}}
    `;
  }
}
