// let add = document.querySelector('.increment');
// let remove = document.querySelector('.decrement');
// let int = document.querySelector('.number');
// let integer = 0;

// add.addEventListener('click', function(){
//     integer += 1;
//     int.innerHTML = integer;
// })

// remove.addEventListener('click', function(){
//     integer -= 1;
//     int.innerHTML = integer;
// })



let btn = document.querySelector('.button')
let modal = document.querySelector('.modal ')
let modal_bg = document.querySelector('.modal_bg ')
let closeButton = document.querySelector('.closeButton')

function openmodal() {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(() => {
        modal_bg.style.opacity = '1'
        modal.style.opacity = '1'
        modal.style.transform = 'translate(-50%,-50% ) scale(.2)'
        
    }, 200);


 

}

btn.onclick = () => {
    openmodal()
}


function closeModal() {
    modal.style.display = 'none'
    modal_bg.style.display = 'none'


    setTimeout(() => {
        bodyFixed.style.background = 'none' 
        modal.style.opacity = 0
        modalTwo.style.opacity = 0
        modal.style.transform = " translate(-50%, -50%)scale(.2);"
    }, 200)  
}

closeButton.onclick = () => {
    closeModal()
}