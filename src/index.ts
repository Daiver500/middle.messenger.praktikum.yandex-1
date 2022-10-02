require("babel-core/register");

import { renderDOM, registerComponent }  from './core';

import RegistrationPage from './pages/registration';
import LoginPage from './pages/login';
import {ErrorPage404} from './pages/error/error404';
import {ErrorPage500} from './pages/error/error500';

import './sass/style.scss';

import Title from './components/title';
import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';

registerComponent(Title);
registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);

document.addEventListener("DOMContentLoaded", () => {
  // DEV: Расскоментировать нужно страницу для отображения

 // const App = new LoginPage();
 // const App = new RegistrationPage();
 // const App = new ErrorPage404();
    const App = new ErrorPage500();

  renderDOM(App);
});
