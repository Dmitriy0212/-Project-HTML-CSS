import './js/support.js';
import initMobileMenu from './js/header.js';

window.addEventListener('load', async () => {
  await initApp();
});

async function initApp() {
  try {
    await initMobileMenu();
    console.log('OK');
  } catch (err) {
    console.error('err', err);
  }
}
