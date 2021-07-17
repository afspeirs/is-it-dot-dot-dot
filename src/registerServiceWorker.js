import { Workbox } from 'workbox-window';

const registerServiceWorker = () => {
	if (import.meta.env.PROD && 'serviceWorker' in navigator) {
		const wb = new Workbox('/service-worker.js');

		wb.addEventListener('installed', () => {
			if (navigator.serviceWorker.controller) {
				// New Content Available event
				const event = new Event('swNewContentAvailable');
				window.dispatchEvent(event);
			} else {
				// Content Cached event
				const event = new Event('swContentCached');
				window.dispatchEvent(event);
			}
		});

		wb.register();
	}
};

export default registerServiceWorker;
