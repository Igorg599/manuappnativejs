import logo from './modules/logo';
import iconLeftNav from './modules/iconLeftNav';
import iconRightNav from './modules/iconRightNav';
import coin from './modules/coin';
import iconRightGamburger from './modules/iconRightGamburger';
import iconPopupRight from './modules/iconPopupRight';
import setVisiblePopupRight from './modules/setVisiblePopupRight';

window.addEventListener('DOMContentLoaded', function() {
    logo();
    iconLeftNav();
    coin();
    iconRightNav();
    iconRightGamburger();
    iconPopupRight();
    setVisiblePopupRight('.navright__popup', '.navright__gamburger');
});