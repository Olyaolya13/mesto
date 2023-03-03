const popupOpen = document.querySelector(".popup"); //переменная окна попапа
const buttonEditPopup = document.querySelector(".content__button-edit"); // переменная кнопки для редактирования и открытия попапа
const buttonClosePopup = document.querySelector(".popup__close-icon"); // переменная кнопки для закрытия попапа (крестик)
const userNameElementWindow = document.querySelector(".content__title"); // переменная ФИО в окне
const userJobTitleElementWindow = document.querySelector(".content__subtitle"); // переменная Должность в окне
const nameInput = document.querySelector("#popup__user-name"); // переменная ФИО в попапе
const jobInput = document.querySelector("#popup__user-occupation"); // переменная Должность в попапе
const formElement = document.querySelector(".popup__form"); // переменная формы попапа

//функция для открытия попапа редактирования ФИО и должность
const openPopupFunction = () => {
  nameInput.value = userNameElementWindow.textContent;
  jobInput.value = userJobTitleElementWindow.textContent;
  popupOpen.classList.add("popup_opened");
};
buttonEditPopup.addEventListener("click", openPopupFunction);

//функция для закрытия попапа редактирования ФИО и должность
const closePopupFunction = () => {
  popupOpen.classList.remove("popup_opened");
};
buttonClosePopup.addEventListener("click", closePopupFunction);

//функция для сохранения значений с попапа и перенос в окно
const handleFormSubmit = (event) => {
  event.preventDefault();
  userNameElementWindow.textContent = nameInput.value;
  userJobTitleElementWindow.textContent = jobInput.value;
  closePopupFunction(); //вызвали повтороно функцию закрытия попапа
};
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

// открытие попапа для карточек
const openAddCardPopup = document.querySelector(".popup__add-card"); //открытие попапа для карточек
const addCardButtonEditPopup = document.querySelector(".content__button-add"); //кнопка для открытия попапа для карточек

const openAddCardPopupFunction = () => {
  openAddCardPopup.classList.add("popup_opened");
  formElementCard.reset(); // удаление данных из формы
};
addCardButtonEditPopup.addEventListener("click", openAddCardPopupFunction); // открытие кнопки для добавления карточек

// закрытие попапа для карточек
const closeAddCardPopup = document.querySelector(".popup__close-card"); //кнопка для закрытия попапа для карточек
const closeAddCardPopupFunction = () => {
  openAddCardPopup.classList.remove("popup_opened");
};
closeAddCardPopup.addEventListener("click", closeAddCardPopupFunction); // закрытие попапа для добавления карточек

const cardsSection = document.querySelector(".cards"); // переменная секции карточки
const formElementCard = document.querySelector(".popup__form-card"); //форма попапа для карточки

// функция для создания карточек, их перебора массива
const createNewCard = (element) => {
  const cardTemplate = document
    .getElementById("card-template")
    .content.cloneNode(true); //получаем содержимое template через content и клонируем
  cardTemplate.querySelector(".card__title").textContent = element.name; // выводим текст через textContent обращаясь к name  в массиве
  cardTemplate.querySelector(".card__image").setAttribute("src", element.link); // выводим картинку через setAttribute обращаясь к link в массиве
  cardTemplate.querySelector(".card__image").setAttribute("alt", element.alt); // выводим alt через setAttribute обращаясь к alt в массиве
  // действие для удаления карточкек
  cardTemplate
    .querySelector(".card__delete")
    .addEventListener("click", handleRemoveCardClick);
  // действие для лайка карточкек
  cardTemplate
    .querySelector(".card__heart")
    .addEventListener("click", handleclickHeartButtonActive);
  // открытие полномаштабной картинки
  cardTemplate
    .querySelector(".card__image")
    .addEventListener("click", handleOpenZoomCard);
  //закрытие полномаштабной картинки
  const closeButtonOpenPopupImage =
    document.querySelector(".popup__close-zoom");
  closeButtonOpenPopupImage.addEventListener(
    "click",
    closeOpenPopupImageFunction
  );

  cardsSection.prepend(cardTemplate); // добавление карточек вначале секции cards
};

// открытие полномаштабной картинки
const openZoomPopup = document.querySelector(".popup__zoom"); // попап для полномаштабной картинки

const handleOpenZoomCard = (event) => {
  const popupZoomPhoto = document.querySelector(".popup__zoom-image");
  const namePopupZoomPhotoText = document.querySelector(
    ".popup__zoom-image-text"
  );
  popupZoomPhoto.src = event.target.src; // передаем в попап картинки значение src
  namePopupZoomPhotoText.textContent = event.target.alt; // передаем в попап картинки значение alt
  openZoomPopup.classList.add("popup_opened");
};
// закрытие полномаштабной картинки
const closeOpenPopupImageFunction = () => {
  openZoomPopup.classList.remove("popup_opened");
};

// удаление карточки
const handleRemoveCardClick = (event) => {
  const clickButton = event.target; // ссылаемся на событие для кнопки
  const deleteCard = clickButton.closest(".card"); // ищем на стр класс card
  deleteCard.remove(); // удаляем класс
};

// лайк для карточек
const handleclickHeartButtonActive = (event) => {
  const clickHeartButton = event.target; // ссылаемся на событие для кнопки
  if (clickHeartButton.classList.contains("card__heart")) {
    clickHeartButton.classList.remove("card__heart");
    clickHeartButton.classList.add("card__heart_active");
  } else {
    clickHeartButton.classList.remove("card__heart_active");
    clickHeartButton.classList.add("card__heart");
  }
};

initialCards.forEach(createNewCard);

// добавление новых карточек
const handleAddNewCardClick = (event) => {
  event.preventDefault();
  const linkAddCard = document.querySelector(".popup__card-link").value; // изображение в карточке
  const nameAddCard = document.querySelector(".popup__card-name").value; // название карточки
  const newCard = {
    name: nameAddCard,
    alt: nameAddCard,
    link: linkAddCard,
  };
  createNewCard(newCard);
  closeAddCardPopupFunction(); //вызвали повтороно функцию закрытия попапа
};
formElementCard.addEventListener("submit", handleAddNewCardClick);
