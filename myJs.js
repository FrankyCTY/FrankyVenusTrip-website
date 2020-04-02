
// DOM Elements

const mainBtn = document.querySelector(".mainBtn");

const redBtn = document.querySelector(".redBtn");

const body = document.body;

//Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.add(theme);
}

mainBtn.onclick = () => {
    
    switch(true) {
        case body.classList.contains("red"):
            body.classList.replace("red", "main");
            localStorage.setItem("theme", "main");
            break;
    }

}

redBtn.onclick = () => {
    switch(true) {
        case body.classList.contains("main"):
            body.classList.replace("main", "red");
            localStorage.setItem("theme", "red");
            break;
    }
}


