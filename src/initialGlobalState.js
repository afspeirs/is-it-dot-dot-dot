export default {
	beforeInstallPrompt: null,
	settings: {
		appTheme: JSON.parse(localStorage.getItem('settings-appTheme')) || 'default',
		primaryColor: JSON.parse(localStorage.getItem('settings-primaryColor')) || '#464',
	},
	updateAvailable: false,
};
