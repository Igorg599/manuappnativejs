import {getResource} from '../services';

const iconLabel = () => {
    class IconLabel {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            this.classes = "navleft__label";
            element.classList.add(this.classes);

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
                <p>${this.name}</p>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            data.items.iconsleftmenu.forEach((item) => {
                new IconLabel(item.src, item.width, item.name, ".header .navleft").render();
            });
        });
}

export default iconLabel