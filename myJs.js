//Dom element
const readMoreBtn = document.querySelector('.read-more');

const spanDots = document.querySelector('.dots');
const spanMore = document.querySelector('.more');

const compass = document.querySelector('.icon-blue');
const back = document.querySelector('.icon-white');
const ui = document.querySelector('.menu');
const uiSearchBar = document.querySelector('.search-bar');
const data = document.querySelector('.data');

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
// let menuOpen = false;
compass.onclick = () => {
    ui.style.opacity = '1';
    ui.style.top = '0';
    // menuOpen = true;
}

// back.onclick = () => {
//     ui.style.opacity = '0';
//     ui.style.top = '-999px';
//     // menuOpen = false;
// }

//Clicking on the area other than menu will go back to main page
$(ui).click(() => {
    ui.style.opacity = '0';
    ui.style.top = '-999px';
    // menuOpen = true;
});
$(data).add('.search-bar, .search-bar__submit, .search-bar__input').click(function() {
    event.stopPropagation();
});

