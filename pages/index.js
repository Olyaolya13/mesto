const popupOpen = document.querySelector('.popup'); //фон окна попап
if (!popupOpen) {
  throw new Error('No popupOpen'); // проверяем переменную
}
const popupOpenContainer = document.querySelector('.popup__container'); // окно попапа
if (!popupOpenContainer) {
  throw new Error('No popupOpenContainer'); // проверяем переменную
}
const buttonEditPopup = document.querySelector('.content__button-edit'); // переменная для редактирования и открытия окна

if (!buttonEditPopup) {
  throw new Error('No buttonEditPopup'); // проверяем переменную
}
const buttonClosePopup = document.querySelector('.popup__close-icon'); // переменная для закрытия окна попапа (крестик)
if (!buttonClosePopup) {
  throw new Error('No buttonClosePopup'); // проверяем переменную
}

buttonEditPopup.addEventListener('click', openPopupFunction); // действие клика при окрытии редактирования попапа

function openPopupFunction() {
  //функция для кнокпки редактирования
  popupOpen.classList.add('popup_opened'); //добавляем класс для фона попапа для открытия
  popupOpenContainer.classList.add('popup_opened'); //добавляем класс для самого окна попапа для открытия
}

buttonClosePopup.addEventListener('click', closePopupFunction); // действие клика при закрытии редактирования попапа
function closePopupFunction() {
  popupOpen.classList.remove('popup_opened'); //удаляем класс для фона попапа для открытия, получая закрытие фона попапа
  popupOpenContainer.classList.remove('popup_opened'); //удаляем класс для самого попапа для открытия, получая закрытие окна попапа
}
