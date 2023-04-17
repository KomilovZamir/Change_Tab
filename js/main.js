let input = document.querySelector("input");
let button = document.querySelector("button");
let fillTitle = document.querySelector("p");
let elements = document.querySelector("ul li");
let arrTitles = ["Positive", "Negative", "Neutral"];

input.addEventListener("input", (e) => {
    let n = e.target.value;
    button.onclick = () => {
        if (n >= 1 && n <= 3) {
            fillTitle.innerHTML = arrTitles[n - 1];
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
            elements[n - 1].classList.add("active");
        } else {
            alert("Bunday qiymat yo'q");
        }
    };
});

function positiveFunc() {
    document.querySelector('p').innerText = 'Positive content';
    document.querySelector('#positive').style.color = 'black';
    document.querySelector('#negative').style.color = '#00000031';
    document.querySelector('#neutral').style.color = '#00000031';
}

function negativeFunc() {
    document.querySelector('p').innerText = 'Negative content';
    document.querySelector('#positive').style.color = 'black';
    document.querySelector('#negative').style.color = '#00000031';
    document.querySelector('#neutral').style.color = '#00000031';
}

function neutralFunc() {
    document.querySelector('p').innerText = 'Neutral content';
    document.querySelector('#positive').style.color = 'black';
    document.querySelector('#negative').style.color = '#00000031';
    document.querySelector('#neutral').style.color = '#00000031';
}