const modal = document.querySelector(`.modal`);

const overlay = document.querySelector(`.overlay`);

const btn1 = document.querySelector(`.close-modal`);

const btn2 = document.querySelectorAll(`.show-modal`);

function openModal(evt) {

    console.log(evt.target);

    overlay.classList.remove(`hidden`);

    modal.classList.remove(`hidden`);
}

function closeModal() {

    overlay.classList.add(`hidden`);

    modal.classList.add(`hidden`);
}



for(const btn of btn2) 
    btn.addEventListener(`click`, openModal);

btn1.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function(evt) {

    if(evt.key === `Escape` && !modal.classList.contains(`hidden`)) 
        closeModal();

});
