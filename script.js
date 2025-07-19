// トップに戻るボタンの動作
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const slides = document.querySelectorAll('.driver-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // 5秒ごとに切り替え

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://f1-gate.com/rss/all.xml')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('newsList');
    list.innerHTML = ''; // 初期テキストをクリア

    data.items.slice(0, 5).forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById('newsList').innerHTML = 'ニュースの取得に失敗しました 🛑';
    console.error('RSS読み込みエラー:', error);
  });

  const track = document.querySelector('.slider-track');
const slideImages = document.querySelectorAll('.slider-track img');
const totalSlides = slideImages.length;

let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${100 * currentIndex}%)`;
}

setInterval(slideNext, 3000);

