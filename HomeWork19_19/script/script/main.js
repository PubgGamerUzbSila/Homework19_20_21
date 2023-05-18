const a = document.getElementById('marketList');
const ongaScroll = document.getElementById('market-scroll-right');
const chapgaScroll = document.getElementById('market-scroll-left');
if (chapgaScroll !== null || ongaScroll !== null) {
  ongaScroll.addEventListener('click', () => {
    a.scrollBy(560, 0);
  });
  chapgaScroll.addEventListener('click', () => {
    a.scrollBy(-560, 0);
  });
}