// top arrow script
document.getElementById("scrollUp").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scrollUp');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    if (scroll >= 55) {
        document.getElementById("header-sticky").classList.add("sticky-bar");
        document.getElementById('main-container').style = "margin-top: 120px";
    } else {
        document.getElementById("header-sticky").classList.remove("sticky-bar");
        document.getElementById('main-container').style = "margin-top: 0";
    }
    if (scroll > 1200) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    } else {
        document.getElementById('scrollUp').classList.remove("show");
        document.getElementById('scrollUp').classList.add("hide");
        document.getElementById("scrollUp").removeEventListener("click", scrolled);
    }
});