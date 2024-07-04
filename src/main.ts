// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import components from './app/components/**/!(*.spec.ts)';
import './assets/css/main.css';

components[0].default;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .catch(err => console.log('service worker not registered', err));
  });
}

