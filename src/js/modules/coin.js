import {getResource} from '../services';

const coin = () => {
    class Coin {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            this.classes = "navright__coin";
            element.classList.add(this.classes);

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='coin'/>
                <p>${this.name}</p>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            new Coin(data.items.iconsrightmenu[0].src, data.items.iconsrightmenu[0].width, data.items.iconsrightmenu[0].name, ".header .navright").render();
        });
}

export default coin;