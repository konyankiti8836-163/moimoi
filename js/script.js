// ==============================
// ハンバーガーメニュー
// ==============================

// 要素を取得
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');


// ==============================
// ハンバーガーメニューを開く・閉じる
// ==============================

menuBtn.addEventListener('click', () => {

  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');

});


// ==============================
// メニューをクリックしたら閉じる
// ==============================

navLinks.forEach((link) => {

  link.addEventListener('click', () => {

    menuBtn.classList.remove('open');
    nav.classList.remove('open');

  });

});

/* =========================================
   NEWS画像 モーダル
========================================= */

const newsImages = document.querySelectorAll('.news-image');

const imageModal = document.querySelector('#imageModal');
const modalImage = document.querySelector('.image-modal-img');
const modalClose = document.querySelector('.image-modal-close');


/* 画像をクリック */

newsImages.forEach((image) => {

  image.addEventListener('click', () => {

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    imageModal.classList.add('open');

  });

});


/* ×をクリック */

modalClose.addEventListener('click', () => {

  imageModal.classList.remove('open');

});


/* 黒い背景をクリック */

imageModal.addEventListener('click', (event) => {

  if (event.target === imageModal) {

    imageModal.classList.remove('open');

  }

});


/* ESCキーで閉じる */

document.addEventListener('keydown', (event) => {

  if (event.key === 'Escape') {

    imageModal.classList.remove('open');

  }

});

/* =========================================
   中見出し スクロールアニメーション
========================================= */

const fadeTitles = document.querySelectorAll('.fade-title');

const titleObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });

  },
  {
    threshold: 0.3
  }
);

fadeTitles.forEach((title) => {
  titleObserver.observe(title);
});


/* =========================================
   SNS MOIMOI 登場
========================================= */

const snsSection = document.querySelector('.sns');
const walkingMoimoi = document.querySelector('.sns-walking-moimoi');

const snsObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        walkingMoimoi.classList.add('show');
      }

    });

  },
  {
    threshold: 0.3
  }
);

snsObserver.observe(snsSection);

/* =========================================
   サクラ ぴょんぴょん登場
========================================= */

const sakura = document.querySelector('.sakura-jump');
const sns = document.querySelector('#sns');

const sakuraObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        sakura.classList.add('show');
      }

    });

  },
  {
    threshold: 0.3
  }
);

sakuraObserver.observe(sns);

