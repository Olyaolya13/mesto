const popupOpen = document.querySelector(".popup"); //переменная окна попапа
const buttonEditPopup = document.querySelector(".content__button-edit"); // переменная кнопки для редактирования и открытия попапа
const buttonClosePopup = document.querySelector(".popup__close-icon"); // переменная кнопки для закрытия попапа (крестик)
const userNameElementWindow = document.querySelector(".content__title"); // переменная ФИО в окне
const userJobTitleElementWindow = document.querySelector(".content__subtitle"); // переменная Должность в окне
const nameInput = document.querySelector("#popup__user-name"); // переменная ФИО в попапе
const jobInput = document.querySelector("#popup__user-occupation"); // переменная Должность в попапе

function openPopupFunction() {
  //функция для открытия кнокпки редактирования со значениями окна
  nameInput.value = userNameElementWindow.textContent; // значения в попапе value берем с окна textContent
  jobInput.value = userJobTitleElementWindow.textContent;
  popupOpen.classList.add("popup_opened");
}
buttonEditPopup.addEventListener("click", openPopupFunction); // действие клика при окрытии редактирования попапа

function closePopupFunction() {
  popupOpen.classList.remove("popup_opened"); //удаляем класс для  попапа для открытия, получая закрытие попапа
}
buttonClosePopup.addEventListener("click", closePopupFunction); // действие клика при закрытии редактирования попапа

const formElement = document.querySelector(".popup__form"); // переменная формы попапа

function handleFormSubmit(event) {
  //функция для сохранения значений с попапа и перенос в окно
  event.preventDefault();
  userNameElementWindow.textContent = nameInput.value;
  userJobTitleElementWindow.textContent = jobInput.value;
  closePopupFunction(); //вызвали повтороно функцию закрытия попапа
}
formElement.addEventListener("submit", handleFormSubmit); // действие сохранения формы попапа
