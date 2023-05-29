// status section
let allSpansContainer = document.querySelector(".stats");

let allSpans = document.querySelectorAll(".stats .container .box .number");

let starting =  false;

window.onscroll = function() {
    if (window.scrollY >= 16000) {
        if (!starting) {
            allSpans.forEach(span => count(span))
        }
        starting = true;
    }

    
}



function count(element) {
    let dataNum = element.dataset.num;
    let interval = setInterval(() => {
        element.textContent++;
        if (element.textContent === dataNum) {
            clearInterval(interval)
        }
    }, 2000 / dataNum);
}
    