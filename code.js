$('.box').on('click', '.tab', function () {
    $(".img_item").hide();
    var id = $('.box .tab').index(this);
    $(".img_item").eq(id).show();

});

let icons = document.querySelectorAll('.box .tab .img')
for (i = 0; i < icons.length; i++) {
    icons[i].onclick = funcShow;
    function funcShow() {
        this.classList.toggle('img-show');
    }
}


// var container = document.getElementById('container');
// var container = {};
// document.getElementById('img1').addEventListener('click', function () {
//     container.innerHTML = "<img src='img/pic01.png'/>";
// })
// console.log(container);

var number = 0;
function count() {
    number = number + 1;
    document.getElementById('data').childNodes[0].data = 'number of goods:' + number;
}

var d = document,
    ChooseHero = d.querySelector('.container');
[].forEach.call(d.getElementsByClassName('img3'), function (el) {
    el.addEventListener('click', function () {
        ChooseHero.appendChild(this.cloneNode());
        this.style.backgroundColor = '';
    }, false);
});

//                                    

let button = document.getElementById('button');
let num = document.getElementById('numbers').innerHTML = 45.00.toFixed(2);
let counter = document.getElementById('counter').innerHTML = 1;
let counter2 = 1;
let str = Number(num);
var end = Number(45.00);
console.log(typeof str);
function add() {
    end = end + str;
    counter2 = counter2 + counter;
    document.getElementById('numbers').innerHTML = end.toFixed(2) + ' грн';
    document.getElementById('counter').innerHTML = counter2;
    if (end > 0) {
        button.disabled = false;
    }
    return end, counter2;
}


function minus() {
    end = end - str;
    counter2 = counter2 - counter;
    document.getElementById('numbers').innerHTML = end.toFixed(2) + 'грн';
    document.getElementById('counter').innerHTML = counter2;
    if (end == 0) {
        button.disabled = true;
    }
}
