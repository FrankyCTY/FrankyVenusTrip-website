//Dom element
const readMoreBtn = document.querySelector('.read-more');

const spanDots = document.querySelector('.dots');
const spanMore = document.querySelector('.more');

const compass = document.getElementById('fixed__nav-btn');
const back = document.getElementById('menu__undo');
const ui = document.querySelector('.menu');

//Button Event Handlers
let isMore = false;
readMoreBtn.onclick = () => {
    //Clicking readMoreBtn to expand the content
    if(!isMore) {
        spanDots.style.display = 'none';
        spanMore.style.display = 'inline';
        readMoreBtn.innerHTML = 'Read less';
        isMore = true;
    }
    //Clicking readMoreBtn to close the content
    else {
        spanDots.style.display = 'inline';
        spanMore.style.display = 'none';
        readMoreBtn.innerHTML = 'Read more';
        isMore = false;
    }
}

//UI shows up when compass is clicked;
compass.onclick = () => {
        ui.style.display = 'block';
}

back.onclick = () => {
    ui.style.display = 'none';
}

