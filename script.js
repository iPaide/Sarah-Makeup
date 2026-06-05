const toggle = document.querySelector(".lang-toggle");
const translatable = document.querySelectorAll("[data-en][data-ar]");

let language = "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "ar" ? "ar" : "en";
  document.body.classList.toggle("is-arabic", language === "ar");

  translatable.forEach((node) => {
    node.textContent = node.dataset[language];
  });

  toggle.querySelector("span").textContent = language === "ar" ? "عربي" : "EN";
  toggle.querySelector("strong").textContent = language === "ar" ? "EN" : "عربي";
}

toggle.addEventListener("click", () => {
  setLanguage(language === "en" ? "ar" : "en");
});

setLanguage("en");
