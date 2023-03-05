const profilePopup = document.querySelector(".profile-popup"); //переменная окна попапа
const buttonEditPopupProfile = document.querySelector(".content__button-edit"); // переменная кнопки для редактирования и открытия попапа
const buttonClosePopupProfile = document.querySelector(".popup__close-icon"); // переменная кнопки для закрытия попапа (крестик)
const userNameElementWindow = document.querySelector(".content__title"); // переменная ФИО в окне
const userJobTitleElementWindow = document.querySelector(".content__subtitle"); // переменная Должность в окне
const nameInput = document.querySelector("#popup__user-name"); // переменная ФИО в попапе
const jobInput = document.querySelector("#popup__user-occupation"); // переменная Должность в попапе
const formProfilePopup = document.querySelector(".popup__form-profile"); // переменная формы попапа

// открытие попапов
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};
// закрытие попапов
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};
//открытие попапа профайла
const openProfilePopupFunction = () => {
  nameInput.value = userNameElementWindow.textContent;
  jobInput.value = userJobTitleElementWindow.textContent;
  openPopup(profilePopup);
};
buttonEditPopupProfile.addEventListener("click", openProfilePopupFunction);

//функция для сохранения значений с попапа и перенос в окно
const handleFormSubmit = (event) => {
  event.preventDefault();
  userNameElementWindow.textContent = nameInput.value;
  userJobTitleElementWindow.textContent = jobInput.value;
  closePopup(profilePopup); //закрытие попапа профайла
};
formProfilePopup.addEventListener("submit", handleFormSubmit); // действие сохранения формы попапа

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
const openAddCardPopup = document.querySelector(".card-popup"); //открытие попапа для карточек
const addCardButtonEditPopup = document.querySelector(".content__button-add"); //кнопка для открытия попапа для карточек

const openAddCardPopupFunction = () => {
  openPopup(openAddCardPopup);
  formElementCard.reset(); // удаление данных из формы
};
addCardButtonEditPopup.addEventListener("click", openAddCardPopupFunction); // открытие кнопки для добавления карточек

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
  cardsSection.prepend(cardTemplate); // добавление карточек вначале секции cards
};

// открытие полномаштабной картинки
const openZoomPopup = document.querySelector(".zoom-popup"); // попап для полномаштабной картинки
const popupZoomPhoto = document.querySelector(".popup__zoom-image");
const namePopupZoomPhotoText = document.querySelector(
  ".popup__zoom-image-text"
);
const handleOpenZoomCard = (event) => {
  popupZoomPhoto.src = event.target.src; // передаем в попап картинки значение src
  popupZoomPhoto.atl = event.target.alt;
  namePopupZoomPhotoText.textContent = event.target.alt; // передаем в попап картинки значение alt
  openPopup(openZoomPopup);
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
const linkAddCard = document.querySelector(".popup__card-link"); // изображение в карточке
const nameAddCard = document.querySelector(".popup__card-name"); // название карточки

const handleAddNewCardClick = (event) => {
  event.preventDefault();
  image = linkAddCard.value;
  title = nameAddCard.value;
  const newCard = {
    name: title,
    alt: title,
    link: image,
  };
  createNewCard(newCard);
  closePopup(openAddCardPopup); //вызвали повтороно функцию закрытия попапа
};
formElementCard.addEventListener("submit", handleAddNewCardClick);

const closeButtons = document.querySelectorAll(".popup__close-icon"); // закрытие попапов на крестик

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest(".popup");
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener("click", () => closePopup(popup));
});
