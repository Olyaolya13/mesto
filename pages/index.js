const popupOpen = document.querySelector('.popup'); //фон окна попап
const popupOpenContainer = document.querySelector('.popup__container'); // окно попапа
const buttonEditPopup = document.querySelector('.content__button-edit'); // переменная кнопки для редактирования и открытия окна
const buttonClosePopup = document.querySelector('.popup__close-icon'); // переменная кнопки для закрытия окна попапа (крестик)

//--------------------------------------------------------------

let userName = 'Жак-Ив Кусто'; // переменная ФИО на странице
let userJobTitle = 'Исследователь'; // переменная должность на странице

const userNameElementWindow = document.querySelector('.content__title');
userNameElementWindow.textContent = userName; // textContent получаем данные на странице (ФИО)

const userJobTitleElementWindow = document.querySelector('.content__subtitle');
userJobTitleElementWindow.textContent = userJobTitle; // textContent получаем данные на странице (Должность)

//--------------------------------------------------------------
const userNameEditPopup = document.querySelector('#popup__user-name'); // переменная для ФИО в попапе
const userJobTitleEditPopup = document.querySelector('#popup__user-occupation'); // переменная для должности в попапе

buttonEditPopup.addEventListener('click', openPopupFunction); // действие клика при окрытии редактирования попапа
function openPopupFunction() {
  //функция для открытия кнокпки редактирования
  popupOpen.classList.add('popup_opened'); //добавляем класс для фона попапа для открытия
  popupOpenContainer.classList.add('popup_opened'); //добавляем класс для самого окна попапа для открытия
}

buttonClosePopup.addEventListener('click', closePopupFunction); // действие клика при закрытии редактирования попапа
function closePopupFunction() {
  popupOpen.classList.remove('popup_opened'); //удаляем класс для фона попапа для открытия, получая закрытие фона попапа
  popupOpenContainer.classList.remove('popup_opened'); //удаляем класс для самого попапа для открытия, получая закрытие окна попапа
}
//-------------------------------------------------------

const buttonPopupSave = document.querySelector('.popup__button-save'); // переменная для кнопки сохранения в попап
buttonPopupSave.addEventListener('click', closePopupFunction); // функция закрытия для кнопки сохранения

userNameEditPopup.addEventListener('input', function handleFormSubmit(event) {
  event.preventDefault();
  const value = event.target.value;
  userNameElementWindow.textContent = value;
});

userJobTitleEditPopup.addEventListener('input', function handleFormSubmit(event) {
  event.preventDefault();
  const value = event.target.value;
  userJobTitleElementWindow.textContent = value;
});
