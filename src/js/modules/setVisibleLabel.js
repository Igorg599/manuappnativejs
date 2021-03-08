const setVisibleLabel = (popupSelector, iconsSelector) => {
    const itemsPopup = document.querySelectorAll(popupSelector)
    const itemsLabel = document.querySelectorAll(iconsSelector)
    itemsLabel.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = 'none';
        }
    })
    itemsPopup.forEach((item, index) => {
        item.addEventListener('click', () => {
            itemsLabel.forEach((item) => {
                item.style.display = 'none';
            })
            itemsLabel[index].style = 'flex'
        })
    })
}

export default setVisibleLabel;