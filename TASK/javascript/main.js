//Высчитываем высоту блоков и присваиваем ее к меню
function containerWidth() {
    var container = 0;
    var firstrow = document.querySelector('.first-row').offsetHeight;
    var secondrow = document.querySelector('.second-row').offsetHeight;
    var thirdrow = document.querySelector('.social-network-list').offsetHeight;
    var fourthrow = document.querySelector('.last-row').offsetHeight;
    container = firstrow + secondrow + thirdrow + fourthrow +281;
    var menuheight = document.querySelector('.menu');
    menuheight.style.height = container + 'px';
}

function changeWidth() {
//Уменьшаем размеры блоков, в зависимости от размера окна
    var socialblock = document.getElementsByClassName('social-network');
    var blockwidth = window.innerWidth;
    console.log(blockwidth);
    if(blockwidth < 1330) {
        for (var i = 0; i<socialblock.length; i++ ){
            socialblock[i].style.width = 150 + 'px';
            socialblock[i].style.height = 150 + 'px';
        }
    } else if (blockwidth > 1330){
        for (var i = 0; i<socialblock.length; i++ ){
            socialblock[i].style.width = 200 + 'px';
            socialblock[i].style.height = 200 + 'px';
        }
    } else if (blockwidth < 1110){
        for (var i = 0; i<socialblock.length; i++ ){
            socialblock[i].style.width = 200 + 'px';
            socialblock[i].style.height = 200 + 'px';
        }
    
    }
}


window.onresize = changeWidth();
changeWidth();

window.onresize = containerWidth();
containerWidth();

