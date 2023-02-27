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

const initialCards = [
  {
    name: "Япония",
    link: "https://images.unsplash.com/photo-1677350787420-d3309b8a1eb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "Стрит арт Япония",
  },
  {
    name: "Великобритания",
    link: "https://images.unsplash.com/photo-1517776832751-0a7e6993de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    alt: "Стрит арт Великобритания",
  },
  {
    name: "Германия",
    link: "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    alt: "Стрит арт Германия",
  },
  {
    name: "Польша",
    link: "https://images.unsplash.com/photo-1551961761-c786d7587b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    alt: "Стрит арт Польша",
  },
  {
    name: "Латвия",
    link: "https://images.unsplash.com/photo-1554313595-4e7325a1256a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    alt: "Стрит арт Латвия",
  },
  {
    name: "Стрит арт США",
    link: "https://images.unsplash.com/photo-1538591342826-9ad43007c016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
    alt: "США",
  },
];

const cardsSection = document.querySelector(".cards"); // обращаемся к секции cards

initialCards.forEach(function (element) {
  //перебираем каждую карточку
  const cardTemplate = document
    .getElementById("card-template")
    .content.cloneNode(true); //получаем содержимое template через content и клонируем, получаем 6 карточек
  const cardNameTitle = cardTemplate.querySelector(".card__title"); // обращаемся к заголовку карточки в ранее полученном содержимом template
  cardNameTitle.textContent = element.name; // выводим текст через textContent обращаясь к name  в массиве
  const cardLinkImage = cardTemplate.querySelector(".card__image"); //обращаемся к картинке карточки в ранее полученном содержимом template
  cardLinkImage.setAttribute("src", element.link); // выводим картинку через setAttribute обращаясь к link в массиве
  cardLinkImage.setAttribute("alt", element.alt); // выводим alt через setAttribute обращаясь к alt в массиве
  cardsSection.append(cardTemplate);
});

/* <template id="card-template">
<article class="card">
<img src="#" alt="#" class="card__image" />
<div class="card__text">
  <h2 class="card__title"></h2>
  <button type="button" class="card__heart"></button>
</div>
</article>
  cardsSection.append(cardTemplate);
</template> */

const openAddCardPopup = document.querySelector(".popup__card-add");
const addCardButtonEditPopup = document.querySelector(".content__button-add");
const closeAddCardPopup = document.querySelector(".popup__close_add-card");

function openAddCardPopupFunction() {
  openAddCardPopup.classList.add("popup_opened");
}
addCardButtonEditPopup.addEventListener("click", openAddCardPopupFunction); // открытие кнопки для добавления карточек

function closeAddCardPopupFunction() {
  openAddCardPopup.classList.remove("popup_opened");
}
closeAddCardPopup.addEventListener("click", closeAddCardPopupFunction); // закрытие попапа для добавления карточек
