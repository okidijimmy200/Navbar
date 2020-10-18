//var for btns
const navbarBtn = document.querySelector('.navbar__btn')
const navbarLinks = document.querySelector('.navbar__links')

navbarBtn.addEventListener('click', function(){
    //check if we hv a class or not
    let value =navbarLinks.classList.contains('navbar__collapse')

    //check if value is true
    if(value) {
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change')
    } else {
        navbarLinks.classList.add('navbar__collapse')
        navbarBtn.classList.add('change')
    }
})