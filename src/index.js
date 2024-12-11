import '../src/style.css';
import Icon from '../src/assets/images/download.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
