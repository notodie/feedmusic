const menubtn = document.querySelector('.menubtn');
let menuopen = false;
menubtn.addEventListener('click', () => {
    if (!menuopen) {
        menubtn.classList.add('open');
        menuopen = true;
    } else {
        menubtn.classList.remove('open');
        menuopen = false;
    }
});