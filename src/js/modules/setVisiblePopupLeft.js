const setVisiblePopupRight = (popupSelector, iconSelector) => {
    const popup = document.querySelector(popupSelector);
    const icon = document.querySelector(iconSelector);
    icon.addEventListener('click', () => {
        if (window.getComputedStyle(popup).display == 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    })
    window.addEventListener('click', (event) => {
        if (event.target !== icon && event.target !== document.querySelector('.navleft__gamburger_label') && event.target !== document.querySelector('.navleft__gamburger img')) {
            popup.style.display = 'none';
        }
    })
}

export default setVisiblePopupRight;