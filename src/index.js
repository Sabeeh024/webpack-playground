import '../src/style.css'
import Icon from '../src/asset/images/download.png'

function component() {
    const element = document.createElement('div');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());