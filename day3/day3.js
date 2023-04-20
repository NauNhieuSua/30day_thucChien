let openModal = document.querySelector('.openModal')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')
let hide = document.querySelector('.hide')
modal.classList.add('hide')


openModal.addEventListener('click', function(e) {
   modal.classList.toggle('hide')
   openModal.classList.toggle('hide')
})

function delete1(e) {
    modal.classList.toggle('hide')
    openModal.classList.toggle('hide')
}

modal.addEventListener('click',function(e){
    if(e.target==e.currentTarget)
    {
    modal.classList.toggle('hide')
    openModal.classList.toggle('hide') 
    } 
})

