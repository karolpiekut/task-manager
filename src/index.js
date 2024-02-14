import _ from 'lodash';
import './styles.css';
import BackgroundBoard from './resources/chalk.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const appBackground = new Image();
    appBackground.src = BackgroundBoard;
    element.appendChild(appBackground);

    return element;
}


document.body.appendChild(component());


