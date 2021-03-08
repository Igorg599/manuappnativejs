import {getResource} from '../services';
import setVisiblePopupLeft from './setVisiblePopupLeft';

const iconLeftGamburger = () => {
    class IconLeftGamburger {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            element.classList.add('navleft__gamburger');

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='coin'/>
                <div class='navleft__gamburger_label'/>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            new IconLeftGamburger(data.items.gamburger.src, data.items.gamburger.width, data.items.gamburger.name, ".header .navright").render();
            setVisiblePopupLeft('.navleft__popup', '.navleft__gamburger');
        });
}

export default iconLeftGamburger;