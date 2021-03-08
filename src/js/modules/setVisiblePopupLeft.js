const setVisiblePopupRight = (popupSelector, iconSelector) => {
    const popup = document.querySelector(popupSelector);
    const icon = document.querySelector(iconSelector);
    const iconNav = document.querySelectorAll('.navleft__icons')
    iconNav.forEach((item, index) => {
        if (index === 9) {
            item.addEventListener('click', () => {
                if (window.getComputedStyle(popup).display == 'none') {
                    popup.style.display = 'block';
                } else {
                    popup.style.display = 'none';
                }
            })
        }
    })
    icon.addEventListener('click', () => {
        if (window.getComputedStyle(popup).display == 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    })
    window.addEventListener('click', (event) => {
        if (event.target !== icon && event.target !== document.querySelector('.navleft__gamburger_label') && event.target !== document.querySelector('.navleft__gamburger img') && event.target !== iconNav[9] && event.target !== document.querySelectorAll('.navleft__icons img')[9] && event.target !== document.querySelectorAll('.navleft__icons p')[9] ) {
            popup.style.display = 'none';
        }
    })
}

export default setVisiblePopupRight;