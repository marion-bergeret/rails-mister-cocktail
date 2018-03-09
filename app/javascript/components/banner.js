import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["A curated cocktail list", "by Marion Bergeret"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
