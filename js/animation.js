function imgSlider(anything) {
    document.querySelector('.jivy').src = anything
}

function changeColor(color) {
    const circle = document.querySelector('.circle');
    const span = document.querySelector('h2 span');
    const btn = document.querySelector('.textBox a');

    circle.style.background = color;
    span.style.color = color;
    btn.style.background = color;
}