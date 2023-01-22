// custom select
const element = document.querySelector(".broadcast__select");
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

// accordion

new Accordion(".accordion-container");

// profile block

let acButton = document.querySelectorAll(".ac-trigger");
let guestProfile = document.querySelector(".guest-profile");
let acTest = document.querySelectorAll(".ac__link--test");
let guestTest = document.querySelector(".guest-profile-test");
let acMain = document.querySelector("#btn6");

acButton.forEach((el) => {
  el.addEventListener("click", function () {
    guestProfile.classList.remove("guest-profile--active"),
      guestTest.classList.remove("guest-profile--active");
  });
}),
  acTest.forEach((elem) => {
    elem.addEventListener("click", function () {
      guestTest.classList.toggle("guest-profile--active"),
        guestProfile.classList.remove("guest-profile--active");
    });
  }),
  acMain.addEventListener("click", function () {
    guestProfile.classList.toggle("guest-profile--active"),
      guestTest.classList.remove("guest-profile--active");
  });

// swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1110: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});

// custom slider


// validator

const validation = new JustValidate("#form");
const validation2 = new JustValidate("#form2");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели Имя",
    },
  ])

  .addField("#checkbox-form", [
    {
      rule: "required",
      errorMessage: "Нужно дать согласие на обработку персональных данных",
    },
    
  

    
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели Email",
    },
    {
      rule: "email",
      errorMessage: "Email введен неверно",
    }

    

    
  ])

  .addField("#textarea", [
    {
      rule: "required",
      errorMessage: "Вы не ввели cообщение",
    },
  ])

  

validation2
  .addField("#password", [
    {
      rule: "password",
      errorMessage: "Пароль должен содержать минимум 8 символов",
    },

    {
      rule: "required",
      errorMessage: "Введите пароль",
    },

    {
      rule: "minLength",
      value: 3,
      errorMessage: "Логин должен содержать минимум 3 символа",
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#name2", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Длина логина должна быть не менее 3 символов",
    },
    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "required",
      errorMessage: "Введите логин",
    },
  ]);

// btns
let playerBtn = document.querySelectorAll(".button-icon ");
let playerPause = document.querySelectorAll(".button-pause");
let burgerBtn = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuBottom = document.querySelector(".nav-bottom");
let navBottom = document.querySelector(".header__nav-bottom");
let searchForm = document.querySelector(".search__form");
let searchBtn = document.querySelector(".buttons-wrapper__search");
let itemTopLink = document.querySelectorAll(".js-list__link");
let buttonMini = document.querySelector(".nav__button-mini");
let buttonLive = document.querySelector(".live-buttons");
let loginBtn = document.querySelector(".buttons-wrapper__login");
let modalBlock = document.querySelector(".modal-block");
let authBlock = document.querySelector(".auth-block");
let modalCloseBtn = document.querySelector(".auth-close");
let bottomBtn = document.querySelectorAll(".nav-bottom__button");
let podcastPlay = document.querySelectorAll(".content-play-btn");
let podcastBtn = document.querySelector(".podcast__button");
let podcastList = document.querySelector(".podcast__list");

podcastBtn.addEventListener("click", function () {
  podcastList.classList.toggle("podcast__list--active");
});

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger--active");
  burgerMenu.classList.toggle("burger-menu--active");
  burgerMenuBottom.classList.toggle("nav-bottom--active");
}),
  // itemTopLink.addEventListener('click', function() {
  //   burgerMenu.classList.remove('burger__menu--active');
  // }),

  itemTopLink.forEach((element) => {
    element.addEventListener("click", function () {
      burgerMenu.classList.remove("burger-menu--active"),
        burgerMenuBottom.classList.remove("nav-bottom--active"),
        burgerBtn.classList.remove("burger--active");
    });
  }),
  searchBtn.addEventListener("click", function () {
    {
      searchForm.classList.toggle("search__form--active");
    }
  }),
  buttonMini.addEventListener("click", function () {
    buttonMini.classList.toggle("wrapper-button--active"),
      burgerMenuBottom.classList.toggle("nav-bottom--enabled"),
      buttonLive.classList.toggle("live-buttons--active");
  }),
  loginBtn.addEventListener("click", function () {
    modalBlock.classList.toggle("modal-block--active"),
      authBlock.classList.toggle("auth-block--active");
  }),
  modalCloseBtn.addEventListener("click", function () {
    modalBlock.classList.remove("modal-block--active"),
      authBlock.classList.remove("auth-block--active");
  }),
  bottomBtn.forEach(function (element) {
    element.addEventListener("click", function (elem) {
      elem.stopPropagation();
      bottomBtn.forEach((el) => {
        if (el != this) {
          el.classList.remove("button--active");
        }
      });
      this.classList.toggle("button--active");
    });
  });

podcastPlay.forEach(function (element) {
  element.addEventListener("click", function (elem) {
    elem.stopPropagation();
    podcastPlay.forEach((el) => {
      if (el != this) {
        el.classList.remove("play-btn--active");
      }
    });
    this.classList.toggle("play-btn--active");
  });
});
