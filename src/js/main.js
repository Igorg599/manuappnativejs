import logo from './modules/logo';
import iconLeftNav from './modules/iconLeftNav';
import iconLabel from './modules/iconLabel';
import iconRightNav from './modules/iconRightNav';
import coin from './modules/coin';
import iconLeftGamburger from './modules/iconLeftGamburger';
import iconRightGamburger from './modules/iconRightGamburger';
import iconPopupRight from './modules/iconPopupRight';
import iconPopupLeft from './modules/iconPopupLeft';

window.addEventListener('DOMContentLoaded', function() {
    logo();
    iconLeftNav();
    coin();
    iconLabel();
    iconLeftGamburger();
    iconRightNav();
    iconRightGamburger();
    iconPopupRight();
    iconPopupLeft();
});