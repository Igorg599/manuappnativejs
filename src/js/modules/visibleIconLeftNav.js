const visibleIconLeftNav = (iconSelector) => {
    const icon = document.querySelectorAll(iconSelector)
    function setSizeScreen() {
        if (document.documentElement.clientWidth >= 1014) {
            icon.forEach((item, index) => {
                if (index > 8) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 1014) {
            icon.forEach((item, index) => {
                if (index > 7 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 926) {
            icon.forEach((item, index) => {
                if (index > 6 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 838) {
            icon.forEach((item, index) => {
                if (index > 5 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 750) {
            icon.forEach((item, index) => {
                if (index > 4 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 662) {
            icon.forEach((item, index) => {
                if (index > 3 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 574) {
            icon.forEach((item, index) => {
                if (index > 2 && index !== 9) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 511) {
            icon.forEach((item) => {
                item.style.display = 'none';
            })
        }
    }
    setSizeScreen();
    window.addEventListener('resize', () => {
        setSizeScreen();
    });
}

export default visibleIconLeftNav;