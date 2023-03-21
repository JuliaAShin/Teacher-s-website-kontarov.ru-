//date

let dateContainer = document.getElementById('date');
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
]

let monthWord = months[month]

dateContainer.innerHTML = `Сегодня&nbsp;${date}&nbsp;${monthWord}&nbsp;${year}г.`;


//letters

var container = document.querySelector('.thank-you-letters-and-atom');

var allImgs = document.querySelectorAll('.letter');
var bigImg = document.querySelector('.wrap img');
var wrap = document.querySelector('.wrap');

function showBigImg(elem) {
    wrap.classList.add('wrap-visible');
    let small_img_src = elem.target.src;
    var src_content = small_img_src.split('/');
    var path = `${src_content[src_content.length-2]}/bigImgs/${src_content[src_content.length-1]}`;
    bigImg.src=path;

    wrap.onclick = function () {
        wrap.classList.add('wrap-anim');
        wrap.addEventListener('animationend', function () {
            wrap.classList.remove('wrap-visible', 'wrap-anim');
        });
    }

} //завершение showBigImg

for (var i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener('click', showBigImg);
}

