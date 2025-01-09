let currentLang = 'en';

export function loadLanguage(lang) {
  fetch(`/locales/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });
      currentLang = lang;
    });
}

export function setupLanguageToggle() {
  window.toggleLanguage = () => {
    const langs = ['en', 'zh', 'ko'];
    const currentIndex = langs.indexOf(currentLang);
    const nextIndex = currentIndex % langs.length;
    loadLanguage(langs[nextIndex]);
  };

  document.getElementById('language-select').addEventListener('change', (n) => {
    const a = n.target.value;
    currentLang = a;
    toggleLanguage();
  });
}
