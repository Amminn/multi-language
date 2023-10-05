const translations = {
  en: {
    home: "Home",
    about: "About",
    contactus: "Contact us",
    fqa: "FQA",
    english: "English",
    arabic: "Arabic",
    mainTitle: "This Trash WebSite",
    mainP: "You better sign in now or!",
    btn: "Sign In"
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    contactus: "تواصل معنا",
    fqa: "اسئلة",
    english: "الانجليزية",
    arabic: "العربية",
    mainTitle: "هذا الموقع مذهل حقا",
    mainP: "سارع بتسجيل الان قبل فوات الاوان",
    btn: "سجل"
  },
};

//export default translations;

const languageSelector = document.querySelector("select")

languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value)
})

function setLanguage(language) {
  const elements = document.querySelectorAll('[data-lng]')
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-lng")
    element.textContent = translations[language][translationKey]
  })
}

