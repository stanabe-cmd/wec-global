// スクロールに合わせて、要素を下からふわっと表示する
//
// - JSが動いたときだけ html に .reveal-on を付け、そのときだけ要素を隠す
//   (JSが失敗しても文字や写真が消えたままにならない)
// - 「動きを減らす」設定の端末では何もしない
// - 同じ並びのカードは少しずつずらして表示する

const TARGETS = [
  '.section-title',
  '.problem-card',
  '.problem-illustration-wrapper',
  '.problem-solution-text',
  '.service-card',
  '.strength-text',
  '.strength-visual',
  '.net-intro .net-head',
  '.net-photo',
  '.net-card',
  '.net-more',
  '.net-point',
  '.group-link > h3',
  '.group-lead',
  '.group-org',
  '.case-card',
  '.mid-cta-title',
  '.mid-cta-btns',
  '.flow-phase',
  '.flow-flight',
  '.faq-list details',
  '.contact p',
  '.contact-form',
  // インタビューページ
  '.cs-main-img',
  '.cs-block',
  '.cs-sidebar-cta',
];

// この親の中で並んでいる要素は、順番に少しずつ遅らせる
const STAGGER_PARENTS = [
  '.problem-grid',
  '.services-grid',
  '.net-cards',
  '.net-points',
  '.group-orgs',
  '.cases-grid',
  '.flow-phases',
  '.faq-list',
];

export function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  const els = document.querySelectorAll(TARGETS.join(','));
  if (!els.length) return;

  els.forEach((el) => el.classList.add('reveal'));

  STAGGER_PARENTS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((parent) => {
      [...parent.children]
        .filter((c) => c.classList.contains('reveal'))
        .forEach((c, i) => c.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 90}ms`));
    });
  });

  document.documentElement.classList.add('reveal-on');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  els.forEach((el) => io.observe(el));
}
