const popupOpen = document.querySelector(".popup"); //переменная окна попапа
const buttonEditPopup = document.querySelector(".content__button-edit"); // переменная кнопки для редактирования и открытия попапа
const buttonClosePopup = document.querySelector(".popup__close-icon"); // переменная кнопки для закрытия попапа (крестик)
const userNameElementWindow = document.querySelector(".content__title"); // переменная ФИО в окне
const userJobTitleElementWindow = document.querySelector(".content__subtitle"); // переменная Должность в окне
const nameInput = document.querySelector("#popup__user-name"); // переменная ФИО в попапе
const jobInput = document.querySelector("#popup__user-occupation"); // переменная Должность в попапе
const formElement = document.querySelector(".popup__form"); // переменная формы попапа

//функция для открытия попапа редактирования ФИО и должность
function openPopupFunction() {
  nameInput.value = userNameElementWindow.textContent;
  jobInput.value = userJobTitleElementWindow.textContent;
  popupOpen.classList.add("popup_opened");
}
buttonEditPopup.addEventListener("click", openPopupFunction);

//функция для закрытия попапа редактирования ФИО и должность
function closePopupFunction() {
  popupOpen.classList.remove("popup_opened");
}
buttonClosePopup.addEventListener("click", closePopupFunction);

//функция для сохранения значений с попапа и перенос в окно
function handleFormSubmit(event) {
  event.preventDefault();
  userNameElementWindow.textContent = nameInput.value;
  userJobTitleElementWindow.textContent = jobInput.value;
  closePopupFunction(); //вызвали повтороно функцию закрытия попапа
}
formElement.addEventListener("submit", handleFormSubmit); // действие сохранения формы попапа

//переменная с массивом карточек
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
    name: "Австралия",
    link: "https://images.unsplash.com/photo-1530406831759-15c5c0cbce8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    alt: "Стрит арт Австралия",
  },

  {
    name: "США",
    link: "https://images.unsplash.com/photo-1538591342826-9ad43007c016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
    alt: "Стрит арт США",
  },
  {
    name: "Бельгия",
    link: "https://images.unsplash.com/photo-1564385479952-4cc4a28234a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    alt: "Стрит арт Бельгия",
  },
];

const cardsSection = document.querySelector(".cards"); // переменная секции карточки
const formElementCard = document.querySelector(".popup__form-card"); //форма попапа для карточки

// функция для создания карточек, их перебора массива
function createNewCard(element) {
  const cardTemplate = document
    .getElementById("card-template")
    .content.cloneNode(true); //получаем содержимое template через content и клонируем
  const cardNameTitle = cardTemplate.querySelector(".card__title"); // обращаемся к заголовку карточки в ранее полученном содержимом template
  const cardLinkImage = cardTemplate.querySelector(".card__image"); //обращаемся к картинке карточки в ранее полученном содержимом template
  cardNameTitle.textContent = element.name; // выводим текст через textContent обращаясь к name  в массиве
  cardLinkImage.setAttribute("src", element.link); // выводим картинку через setAttribute обращаясь к link в массиве
  cardLinkImage.setAttribute("alt", element.alt); // выводим alt через setAttribute обращаясь к alt в массиве
  cardsSection.prepend(cardTemplate); // добавление карточек вначале секции cards
}
initialCards.forEach(createNewCard);

// открытие попапа для карточек
const openAddCardPopup = document.querySelector(".popup__card-add"); //открытие попапа для карточек
const addCardButtonEditPopup = document.querySelector(".content__button-add"); //кнопка для открытия попапа для карточек

function openAddCardPopupFunction() {
  openAddCardPopup.classList.add("popup_opened");
  formElementCard.reset(); // удаление данных из формы
}

addCardButtonEditPopup.addEventListener("click", openAddCardPopupFunction); // открытие кнопки для добавления карточек

// закрытие попапа для карточек
const closeAddCardPopup = document.querySelector(".popup__close_add-card"); //кнопка для закрытия попапа для карточек

function closeAddCardPopupFunction() {
  openAddCardPopup.classList.remove("popup_opened");
}
closeAddCardPopup.addEventListener("click", closeAddCardPopupFunction); // закрытие попапа для добавления карточек

// добавление новых карточек
function addNewCard(event) {
  event.preventDefault();
  const linkAddCard = document.querySelector(".popup__card-link").value; // изображение в карточке
  const nameAddCard = document.querySelector(".popup__card-name").value; // название карточки
  const newCard = {
    name: nameAddCard,
    link: linkAddCard,
  };
  createNewCard(newCard);
  closeAddCardPopupFunction(); //вызвали повтороно функцию закрытия попапа
}
formElementCard.addEventListener("submit", addNewCard); //действие сохранения формы попапа
