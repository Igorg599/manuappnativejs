const visibleIconPopupLeftNav = (iconSelector) => {
    const icon = document.querySelectorAll(iconSelector)
    function setSizeScreen () {
        if (document.documentElement.clientWidth < 1014) {
            icon.forEach((item, index) => {
                if (index < 8) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 926) {
            icon.forEach((item, index) => {
                if (index < 7) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 838) {
            icon.forEach((item, index) => {
                if (index < 6) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 750) {
            icon.forEach((item, index) => {
                if (index < 5) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 662) {
            icon.forEach((item, index) => {
                if (index < 4) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 574) {
            icon.forEach((item, index) => {
                if (index < 3) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
        if (document.documentElement.clientWidth < 510) {
            icon.forEach((item, index) => {
                if (index > 8) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            })
        }
    };
    setSizeScreen();
    window.addEventListener('resize', () => {
        setSizeScreen();
    });
}

export default visibleIconPopupLeftNav;