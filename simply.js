var list = document.getElementsByClassName("textHoldersInt");

document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i<3; i++){
        list[i].style['width'] = '100%';
    }
});

function clicked(i){
    switch(i){
        case 0:
            list[0].style['width'] = '10px';
            break;
        case 1:
            list[1].style['width'] = '10px';
            break;
        case 2:
            list[2].style['width'] = '10px';
            break;
    }
}
function onleave(i){
    switch(i){
        case 0:
            list[0].style['width'] = '100%';
            break;
        case 1:
            list[1].style['width'] = '100%';
            break;
        case 2:
            list[2].style['width'] = '100%';
            break;
    }
}



console.log(list);