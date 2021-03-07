import {getResource} from '../services';

const iconPopupRight = () => {
    class IconPopupRight {
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
            data.items.iconsrightmenu.forEach((item) => {
                new IconPopupRight(item.src, item.width, item.name, ".header .navright__popup ul").render();
            });
        });
}

export default iconPopupRight;