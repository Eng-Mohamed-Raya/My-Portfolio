

//scroll up
const scrollUp= document.querySelector('#scroll-up');
window.onscroll = function() {
    (window.scrollY>=300)?scrollUp.style.display = 'flex':scrollUp.style.display = 'none';
}