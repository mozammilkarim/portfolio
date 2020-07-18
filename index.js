// to change the look of navBar Item which is at focus
function navItemClassChanger(element) {
    // changing all existing navItem to default class
    let navItem = document.getElementsByClassName('activePage');
    for (let index = 0; index < navItem.length; index++) {
        navItem[index].className = 'navItem';
    }
    // changing clicked navItem
    let currentElement = document.getElementById(element);
    currentElement.firstElementChild.className = 'activePage';
}

