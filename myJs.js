//Dom element
const readMoreBtn = document.querySelector('.read-more');

const spanDots = document.querySelector('.dots');
const spanMore = document.querySelector('.more');

const compass = document.querySelector('.icon-blue');
const back = document.querySelector('.icon-white');
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
    ui.style.opacity = '1';
    ui.style.top = '0';
}

back.onclick = () => {
    ui.style.opacity = '0';
    ui.style.top = '-999px';
}

