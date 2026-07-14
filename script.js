// ===== Language Switcher =====
const translations = {
  de: {
    "nav.menu": "Menü",
    "nav.about": "Über uns",
    "nav.toppings": "Toppings",
    "nav.contact": "Kontakt",
    "nav.order": "Jetzt bestellen",
    "hero.eyebrow": "🧋 Zum verlieben lecker!",
    "hero.title": "Echter Bubble&nbsp;Tea,<br><span class=\"italic\">frisch für dich gemixt.</span>",
    "hero.desc": "Über 20 Sorten aus grünem, schwarzem &amp; Oolong Tee – mit frischen Tapioka-Perlen, jeden Tag von Hand gemacht in Stendal &amp; Magdeburg.",
    "hero.btn.menu": "Menü ansehen",
    "hero.btn.location": "Standort finden",
    "hero.stats.varieties": "Sorten",
    "hero.stats.locations": "Standorte",
    "hero.stats.fresh": "frisch gemacht",
    "menu.eyebrow": "Unser Menü",
    "menu.title": "Unsere Beliebtesten",
    "menu.filter.all": "Alle",
    "menu.filter.milk": "Milk Tea",
    "menu.filter.fruit": "Fruchttee",
    "menu.filter.special": "Specials",
    "product.1.name": "Erdbeer Sahne",
    "product.1.desc": "Frische Erdbeeren, cremige Milchhaube &amp; Perlen.",
    "product.1.badge": "Bestseller",
    "product.2.name": "Taro Spekulatius",
    "product.2.desc": "Samtiger Taro mit Spekulatius-Crunch &amp; Tapioka.",
    "product.2.badge": "Bestseller",
    "product.3.name": "Beeren Traum",
    "product.3.desc": "Fruchtiger Tee mit Blaubeeren, Erdbeere &amp; Boba.",
    "product.4.name": "Rainbow Tea",
    "product.4.desc": "Bunter Butterfly-Pea-Tee – ein Regenbogen im Becher.",
    "product.4.badge": "Neu",
    "product.price": "€",
    "product.add": "Hinzufügen",
    "why.eyebrow": "Warum Tea at 9?",
    "why.title": "Frisch gemacht,<br>mit Liebe serviert.",
    "why.feature.1.title": "Ausgewählte Zutaten",
    "why.feature.1.desc": "Hochwertiger Tee und Zutaten, die wir mit Sorgfalt aussuchen.",
    "why.feature.2.title": "Frische Toppings",
    "why.feature.2.desc": "Tapioka &amp; Toppings täglich frisch gekocht – nie aus der Dose.",
    "why.feature.3.title": "Eigenes Rezept",
    "why.feature.3.desc": "Jeder Becher wird auf Bestellung für dich gemixt.",
    "why.feature.4.title": "Zwei Standorte",
    "why.feature.4.desc": "Besuch uns in Stendal &amp; Magdeburg.",
    "reviews.eyebrow": "Google Bewertungen",
    "reviews.title": "Was unsere Gäste sagen",
    "reviews.score": "4,6",
    "reviews.count": "· 134 Rezensionen",
    "reviews.cta": "4,6 von 5",
    "reviews.cta.desc": "– aus 134 echten Bewertungen unserer Gäste auf Google.",
    "reviews.cta.link": "Alle Rezensionen ansehen →",
    "reviews.1.text": "„Bester Bubble Tea, den ich je getrunken habe! Riesige Auswahl an Sorten – wird nie langweilig. Dazu immer freundlicher, schneller Service.”",
    "reviews.1.author": "Laura",
    "reviews.1.source": "Google-Rezension",
    "reviews.2.author": "Durra H.",
    "reviews.2.source": "Google-Rezension",
    "toppings.eyebrow": "Extras",
    "toppings.title": "Beliebte Toppings",
    "toppings.sub": "Mach deinen Bubble Tea zu deinem – über 20 Toppings zur Auswahl.",
    "topping.1": "Schwarze Perlen",
    "topping.2": "Weiße Perlen",
    "topping.3": "Frucht-Jelly",
    "topping.4": "Käseschaum",
    "topping.5": "Pudding",
    "topping.6": "Popping Boba",
    "cta.title": "Hol dir deinen Bubble Tea",
    "cta.desc": "Mo – Sa · 12:30 – 18:30 Uhr · Poststraße 9, 39576 Stendal",
    "cta.btn.route": "Route öffnen",
    "cta.btn.instagram": "Instagram",
    "footer.desc": "Handgemachter Bubble Tea aus der Altmark. Frisch gebrüht. Mit Liebe serviert.",
    "footer.menu": "Menü",
    "footer.menu.milk": "Milk Tea",
    "footer.menu.fruit": "Fruchttee",
    "footer.menu.toppings": "Toppings",
    "footer.locations": "Standorte",
    "footer.contact": "Kontakt",
    "footer.hours": "Mo – Sa · 12:30 – 18:30",
    "footer.copyright": "© 2026 Tea at 9 · Stendal &amp; Magdeburg",
    "footer.hashtag": "#teaat9",
    "toast.added": "hinzugefügt 🧋"
  },
  en: {
    "nav.menu": "Menu",
    "nav.about": "About Us",
    "nav.toppings": "Toppings",
    "nav.contact": "Contact",
    "nav.order": "Order Now",
    "hero.eyebrow": "🧋 Delicious to fall in love!",
    "hero.title": "Real Bubble&nbsp;Tea,<br><span class=\"italic\">freshly mixed for you.</span>",
    "hero.desc": "Over 20 varieties of green, black &amp; Oolong tea – with fresh tapioca pearls, handmade every day in Stendal &amp; Magdeburg.",
    "hero.btn.menu": "View Menu",
    "hero.btn.location": "Find Location",
    "hero.stats.varieties": "Varieties",
    "hero.stats.locations": "Locations",
    "hero.stats.fresh": "freshly made",
    "menu.eyebrow": "Our Menu",
    "menu.title": "Our Favorites",
    "menu.filter.all": "All",
    "menu.filter.milk": "Milk Tea",
    "menu.filter.fruit": "Fruit Tea",
    "menu.filter.special": "Specials",
    "product.1.name": "Strawberry Cream",
    "product.1.desc": "Fresh strawberries, creamy milk foam &amp; pearls.",
    "product.1.badge": "Bestseller",
    "product.2.name": "Taro Speculoos",
    "product.2.desc": "Velvety taro with speculoos crunch &amp; tapioca.",
    "product.2.badge": "Bestseller",
    "product.3.name": "Berry Dream",
    "product.3.desc": "Fruity tea with blueberries, strawberry &amp; boba.",
    "product.4.name": "Rainbow Tea",
    "product.4.desc": "Colorful butterfly pea tea – a rainbow in your cup.",
    "product.4.badge": "New",
    "product.price": "€",
    "product.add": "Add",
    "why.eyebrow": "Why Tea at 9?",
    "why.title": "Freshly made,<br>served with love.",
    "why.feature.1.title": "Selected Ingredients",
    "why.feature.1.desc": "High-quality tea and ingredients we carefully choose.",
    "why.feature.2.title": "Fresh Toppings",
    "why.feature.2.desc": "Tapioca &amp; toppings freshly cooked daily – never from a can.",
    "why.feature.3.title": "Our Own Recipe",
    "why.feature.3.desc": "Every cup is mixed to order for you.",
    "why.feature.4.title": "Two Locations",
    "why.feature.4.desc": "Visit us in Stendal &amp; Magdeburg.",
    "reviews.eyebrow": "Google Reviews",
    "reviews.title": "What Our Guests Say",
    "reviews.score": "4.6",
    "reviews.count": "· 134 Reviews",
    "reviews.cta": "4.6 out of 5",
    "reviews.cta.desc": "– from 134 real reviews from our guests on Google.",
    "reviews.cta.link": "View all Reviews →",
    "reviews.1.text": "“Best Bubble Tea I've ever had! Huge selection of flavors – never gets boring. Plus always friendly, fast service.”",
    "reviews.1.author": "Laura",
    "reviews.1.source": "Google Review",
    "reviews.2.author": "Durra H.",
    "reviews.2.source": "Google Review",
    "toppings.eyebrow": "Extras",
    "toppings.title": "Popular Toppings",
    "toppings.sub": "Make your Bubble Tea yours – over 20 toppings to choose from.",
    "topping.1": "Black Pearls",
    "topping.2": "White Pearls",
    "topping.3": "Fruit Jelly",
    "topping.4": "Cheese Foam",
    "topping.5": "Pudding",
    "topping.6": "Popping Boba",
    "cta.title": "Get Your Bubble Tea",
    "cta.desc": "Mon – Sat · 12:30 – 6:30 PM · Poststraße 9, 39576 Stendal",
    "cta.btn.route": "Open Route",
    "cta.btn.instagram": "Instagram",
    "footer.desc": "Handmade Bubble Tea from the Altmark. Freshly brewed. Served with love.",
    "footer.menu": "Menu",
    "footer.menu.milk": "Milk Tea",
    "footer.menu.fruit": "Fruit Tea",
    "footer.menu.toppings": "Toppings",
    "footer.locations": "Locations",
    "footer.contact": "Contact",
    "footer.hours": "Mon – Sat · 12:30 – 6:30 PM",
    "footer.copyright": "© 2026 Tea at 9 · Stendal &amp; Magdeburg",
    "footer.hashtag": "#teaat9",
    "toast.added": "added 🧋"
  }
};

let currentLang = localStorage.getItem('lang') || 'de';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  // Update current lang indicator
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  
  // Update AOS (re-init to refresh animations after content change)
  if (window.AOS) {
    AOS.refresh();
  }
}

// ===== Language switcher button =====
const langSwitcher = document.getElementById('langSwitcher');
langSwitcher.addEventListener('click', () => {
  const newLang = currentLang === 'de' ? 'en' : 'de';
  setLanguage(newLang);
});

// ===== Mobile nav =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Menu category filter =====
const filters = document.getElementById('filters');
const products = [...document.querySelectorAll('.product')];
filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  filters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.cat;
  products.forEach(p => {
    const show = cat === 'all' || p.dataset.cat === cat;
    p.style.display = show ? '' : 'none';
  });
});

// ===== Add-to-cart toast =====
const toast = document.getElementById('toast');
let toastTimer;
document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.product').querySelector('h3').textContent;
    toast.textContent = `${name} ${translations[currentLang]['toast.added']}`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

// ===== Initialize language on page load =====
setLanguage(currentLang);

// ===== Loading screen =====
const loadingScreen = document.getElementById('loadingScreen');
window.addEventListener('load', () => {
  // Wait a little extra to make sure everything is ready, then hide loading screen
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 800);
});

// ===== Animate On Scroll (AOS library) =====
if (window.AOS) {
  AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 60 });
}

// ===== Count-up for hero stats =====
const stats = document.querySelectorAll('.hero-stats strong');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.textContent.trim();           // e.g. "20+", "100%", "2"
    const target = parseInt(raw, 10) || 0;
    const suffix = raw.replace(/[0-9]/g, '');     // "+", "%", ""
    const duration = 1100, start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);       // ease-out
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    countObserver.unobserve(el);
  });
}, { threshold: .6 });
stats.forEach(s => countObserver.observe(s));
