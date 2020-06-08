import './styles/style.scss';

import navBar from './app/nav-bar.html';

window.onload = function() {
  document.getElementById("root").innerHTML = navBar;
}