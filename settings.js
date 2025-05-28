var menuVisible = false;

document.querySelector('.settings').addEventListener('click',() => {
    menuVisible = !menuVisible;
    switch (menuVisible) {
        case true:
            document.querySelector('.settingsmenu').style.display = "block";
            break;
        case false:
            document.querySelector('.settingsmenu').style.display = "none";
            break;
    }
});

var slider = document.querySelector('#starcount');

slider.addEventListener('change',() => {
    localStorage.setItem('starcount',slider.value.toString())
    resetStars(Number(localStorage.getItem('starcount')))
})