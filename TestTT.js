const slider = document.getElementById('slide');
let position = 0;
function next() {
    position -= 100;
    if (position < -((slider.children.length - 1) * 100)) {
        position = 0;
    }
    slider.style.transform = `translateX(${position}%)`;
}

function prev(){
    position += 100;
    if (position > 0) {
        position = -((slider.children.length - 1) * 100);
    }
    slider.style.transform = `translateX(${position}%)`
}