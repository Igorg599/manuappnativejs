import {getResource} from '../services';

const iconRightGamburger = () => {
    class IconRightGamburger {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            element.classList.add('navright__gamburger');

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='coin'/>
                <div class='navright__gamburger_label'/>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            new IconRightGamburger(data.items.iconsrightmenu[2].src, data.items.iconsrightmenu[2].width, data.items.iconsrightmenu[2].name, ".header .navright").render();
        });
}

export default iconRightGamburger;