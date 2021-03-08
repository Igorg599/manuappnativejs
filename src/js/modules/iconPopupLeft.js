import {getResource} from '../services';
import visibleIconPopupLeftNav from './visibleIconPopupLeftNav';

const iconPopupLeft = () => {
    class IconPopupLeft {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('li');

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
                <p>${this.name}</p>  
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            data.items.iconsleftmenu.filter(item => item.id < 10).forEach((item) => {
                new IconPopupLeft(item.src, item.width, item.name, ".header .navleft__popup ul").render();
            });
            visibleIconPopupLeftNav('.navleft__popup ul li');
        });
}

export default iconPopupLeft;