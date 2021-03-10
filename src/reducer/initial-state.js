const initialState = {
	beforeInstallPrompt: null,
	settings: {
		appTheme: localStorage.getItem('settings-appTheme') || 'default',
	},
	updateAvailable: false,
};

export default initialState;
