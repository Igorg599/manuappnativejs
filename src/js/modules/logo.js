import {getResource} from '../services';

const logo = () => {
    class Logo {
        constructor(src, width, name, parentSelector) {
            this.src = src;
            this.width = width;
            this.name = name;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');

            this.classes = "navleft__logo";
            element.classList.add(this.classes);

            element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='logo'/>
                <p>${this.name}</p>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json')
        .then(data => {
            new Logo(data.items.logo.src, data.items.logo.width, data.items.logo.name, ".header .navleft").render();
        });
}

export default logo;