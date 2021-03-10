export { default as initialState } from './initial-state';

export const reducer = (state, action) => {
	const [location, name] = action.type.split('-');

	if (location === 'settings') {
		const value = action.value !== undefined ? action.value : !state.settings[name];

		localStorage.setItem(action.type, value);

		return {
			...state,
			settings: {
				...state.settings,
				[name]: value,
			},
		};
	}

	return {
		...state,
		[name]: action.value || !state[name],
	};
};
