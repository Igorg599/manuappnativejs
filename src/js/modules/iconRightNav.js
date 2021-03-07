import {getResource} from '../services';

const iconRightNav = () => {
    class IconRightNav {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            this.classes = "navright__menu";
            element.classList.add(this.classes);
            element.style.margin = '0 6px';

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            data.items.iconsrightmenu.filter(item => item.id > 1).forEach((item) => {
                new IconRightNav(item.src, item.width, item.name, ".header .navright").render();
            });
        });
}

export default iconRightNav;