const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});

const rfqForm = document.querySelector('#rfq-form');
if (rfqForm) {
  const file = document.querySelector('#drawing');
  const fileName = document.querySelector('.file-name');
  file.addEventListener('change', () => { fileName.textContent = file.files[0] ? `Selected: ${file.files[0].name}` : ''; });
  rfqForm.addEventListener('submit', event => {
    event.preventDefault();
    const notice = document.querySelector('.form-notice');
    const missing = [...rfqForm.querySelectorAll('[required]')].find(input => !input.value.trim());
    if (missing) { notice.classList.add('show'); missing.focus(); return; }
    notice.classList.remove('show');
    rfqForm.style.display = 'none';
    document.querySelector('.success').classList.add('show');
  });
}
