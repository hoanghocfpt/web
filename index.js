
 
let navbarIcon = document.querySelector('.navbar');
let closeIcon = document.querySelector('.close');
let navMain = document.querySelector('nav.main');
let login = document.querySelectorAll('.login');
let signup = document.querySelector('#signup');
let popup = document.querySelector('.popup');
let closePopup = document.querySelectorAll('.close_popup');
let popupLogin = document.querySelector('.login_popup');
let popupSignup = document.querySelector('.signup_popup');
navbarIcon.addEventListener('click', function (e) {
    navMain.classList.toggle('active');
    document.querySelector('body').style.overflow = 'hidden';
});
closeIcon.addEventListener('click', function (e) {
    navMain.classList.remove('active');
    document.querySelector('body').style.overflow = 'auto';
});


login[0].addEventListener('click', function (e) {
    popupSignup.style.display = 'none';
    popup.style.display = 'flex';
    popupLogin.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
});
login[1].addEventListener('click', function (e) {
   
    popup.style.display = 'flex';
    popupLogin.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
});
closePopup[0].addEventListener('click', function (e) {
    popup.style.display = 'none';
    popupLogin.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});
closePopup[1].addEventListener('click', function (e) {
    popup.style.display = 'none';
    popupLogin.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

signup.addEventListener('click', function (e) {
    popupLogin.style.display = 'none';
    popup.style.display = 'flex';
    popupSignup.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
});

