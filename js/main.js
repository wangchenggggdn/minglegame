import { loadLanguage, setupLanguageToggle } from './languageManager.js';

// Initialize the site
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage('en');
  setupLanguageToggle();
});

function P() {
  const r = {
    '/': homeFun,
    '/Shop': shopFun,
    '/FAQ': faqFun,
    '/videos': modsFun,
    '/Privacy': privacyFun,
    '/ContactUs': termsFun,
    '/Download': downloadFun,
    '/SendEmail': sendEmail,
    '/Game': gameFun,
  };
  const a = window.location.pathname,
    s = r[a] || homeFun;
    s();
}

function updateFun(mainContent, htmlName, homeContent){
  fetch(htmlName)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // 提取特定id的div内容
    const divContent = doc.getElementById(homeContent).innerHTML;
    //alert(divContent);
    document.getElementById(mainContent).innerHTML = html;
    // Event listeners
    document.getElementById('emailForm').addEventListener('submit', sendEmail);
  })
  .catch(error => console.error('Error fetching the HTML:', error));
}

function updateDes(description){
  var existingMeta = document.querySelector('meta[name="description"]');

  if (existingMeta) {
      // 如果存在，更改其内容
      existingMeta.content = description;
  } else {
      // 如果不存在，创建一个新的meta标签
      var meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      // 将新的meta标签添加到head中
      document.head.appendChild(meta);
  }
}

function updateCanonical(canonical){
  // 查找现有的Canonical链接
  var canonicalLink = document.querySelector('link[rel="canonical"]');

  if (canonicalLink) {
      // 如果找到了，更新href属性
      canonicalLink.href = canonical;
  } else {
      // 如果没有找到，创建一个新的link元素
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      
      // 将新的link元素添加到head中
      document.head.appendChild(canonicalLink);
  }
}



function homeFun() {
 // document.getElementById('main-content').innerHTML = main-content
  updateCanonical(window.location.href)
 updateFun("main-content", "/src/home.html", "home")
}
//function characterFun() {
//  updateFun("main-content", "/src/character.html", "home");
//}
function faqFun() {
  document.title = 'Mingle Game FAQ - Frequently Asked Questions'
  updateDes('Find answers to your mingle queries in our FAQ section, covering product features, troubleshooting, and more. Ideal for all users seeking a smooth experience.')
  updateCanonical('https://minglegame.store/FAQ')
  updateFun("main-content", "/src/faq.html", "home")
}
function modsFun() {
  document.title = 'Explore Mingle Game Videos: Your Go-To Source for Engaging Content'
  updateDes('Mingle Game Videos offers engaging content on diverse topics. Join our community to explore entertainment, education, and inspiration.')
  updateCanonical('https://minglegame.store/videos')
  updateFun("main-content", "/src/videos.html", "home")
}
function privacyFun() {
  document.title = 'Mingle Game Privacy Policy - Your Data Protection Rights and Practices'
  updateDes('Review Mingle Game Privacy Policy for details on personal data collection, usage, and protection. We prioritize your privacy and outline rights and responsibilities.')
  updateCanonical('https://minglegame.store/Privacy')
  updateFun("main-content", "/src/privacy.html", "home")
}
function termsFun() {
  document.title = 'Mingle Game Canonical - Contact mingle | Get in Touch with Us'
  updateDes('Contact mingle for support and inquiries via our contact page for emails, phone numbers, and office locations.')
  updateCanonical('https://minglegame.store/ContactUs')
  updateFun("main-content", "/src/contactus.html", "home")
}

function shopFun() {
  document.title = 'Mingle Game Shop - Your Ultimate Destination for Unique Products'
  updateDes('Trendy fashion, gadgets, home decor. Exclusive deals, fast shipping. Join our satisfied community. Shop now!')
  updateCanonical('https://minglegame.store/Shop')
  updateFun("main-content", "/src/shop.html", "home")
}
function gameFun() {
  document.title = 'Mingle Game Shop - Your Ultimate Destination for Unique Products'
  updateDes('Trendy fashion, gadgets, home decor. Exclusive deals, fast shipping. Join our satisfied community. Shop now!')
  updateCanonical('https://minglegame.store/Game')
  updateFun("main-content", "/src/game.html", "home")
}

function downloadFun() {
  //alert('hello python');
  document.title = 'Mingle Play - Mingle Game APK Download Free For Android'
  updateDes('Mingle Game APK for free on Android. Get the latest version for an adventurous experience. Start playing now!')
  updateCanonical('https://minglegame.store/Download')
  updateFun("main-content", "/src/download.html", "home")
}



P();



// Configuration
const EMAIL_CONFIG = {
  recipient: 'minglegame@163.com'
};

// Utility functions
function getFormData() {
  return {
      subject: document.getElementById('subject').value,
      content: document.getElementById('content').value
  };
}

function createMailtoLink(subject, content) {
  return `mailto:${EMAIL_CONFIG.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
}

function sendEmail(event) {
  event.preventDefault();
  const { subject, content } = getFormData();
  const mailtoLink = createMailtoLink(subject, content);
  window.location.href = mailtoLink;
}
