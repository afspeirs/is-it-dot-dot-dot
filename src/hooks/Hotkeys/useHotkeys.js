import { useEffect } from 'react';

const useHotkeys = (inputHotkeys, options) => {
	const isArray = Array.isArray(inputHotkeys);

	const runHotkey = (event, hotkey) => {
		const {
			callback,
			keys,
			metaModifier,
		} = hotkey;
		if (metaModifier && (event.ctrlKey || event.metaKey) && keys.includes(event.key)) {
			callback(event);
		} else if (!metaModifier && keys.includes(event.key)) {
			callback(event);
		}
	};

	const handleKeyDown = (event) => {
		if (options?.debug) console.log(event); // eslint-disable-line no-console

		if (isArray) {
			inputHotkeys.forEach((hotkey) => runHotkey(event, hotkey));
		} else {
			runHotkey(event, inputHotkeys);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);
};

export default useHotkeys;
