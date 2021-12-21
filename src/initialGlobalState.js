export default {
	beforeInstallPrompt: null,
	settings: {
		appTheme: JSON.parse(localStorage.getItem('settings-appTheme')) || 'default',
	},
	updateAvailable: false,
};
