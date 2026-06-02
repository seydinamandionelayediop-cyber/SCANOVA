const drawer = document.querySelector('#drawer');
document.querySelector('#menuBtn').addEventListener('click', () => drawer.classList.add('open'));
document.querySelector('#closeBtn').addEventListener('click', () => drawer.classList.remove('open'));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:.12});
document.querySelectorAll('section, article').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(22px)'; el.style.transition = 'opacity .6s ease, transform .6s ease';
  reveal.observe(el);
});
const style=document.createElement('style'); style.textContent='.visible{opacity:1!important;transform:none!important}'; document.head.appendChild(style);
