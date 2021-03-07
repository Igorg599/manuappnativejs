const setVisiblePopupRight = (popupSelector, iconSelector) => {
    const popup = document.querySelector(popupSelector);
    const icon = document.querySelector(iconSelector);
    window.addEventListener('click', () => {
        popup.style.display = 'none';
    })
    icon.addEventListener('click', () => {
        popup.style.display = 'block';
    })
}

export default setVisiblePopupRight;