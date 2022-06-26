let editBtn = document.querySelector('.user__edit-button');
let closeBtn = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup-wrapper');

editBtn.addEventListener('click', function() {
  popup.classList.remove('popup-wrapper_closed');
});

closeBtn.addEventListener('click', function() {
  popup.classList.add('popup-wrapper_closed');
});

let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-info');
let nameField = document.querySelector('.user__name');
let jobField = document.querySelector('.user__info');

function formSubmitHandler (evt) {
evt.preventDefault();
nameField.textContent = nameInput.value;
jobField.textContent = jobInput.value;
};

formElement.addEventListener('submit', formSubmitHandler);

