import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'material-ui-snackbar-provider';

const CheckForUpdateContext = createContext();

// Hook for child components to get the CheckForUpdate object and re-render when it changes.
export const useCheckForUpdate = () => useContext(CheckForUpdateContext);

// Provider hook that creates CheckForUpdate object and handles state
function useCheckForUpdateProvider() {
	const snackbar = useSnackbar();
	const [updateAvailable, setUpdateAvailable] = useState(false);

	const swNewContentAvailable = () => {
		snackbar.showMessage(
			'A new version is available',
			'Update',
			() => window.location.reload(true),
		);
		setUpdateAvailable(true);
	};

	const swContentCached = () => {
		snackbar.showMessage(
			'Caching complete! Now available offline',
		);
	};

	useEffect(() => {
		window.addEventListener('swNewContentAvailable', swNewContentAvailable);
		window.addEventListener('swContentCached', swContentCached);

		return () => {
			window.removeEventListener('swNewContentAvailable', swNewContentAvailable);
			window.removeEventListener('swContentCached', swContentCached);
		};
	}, []); // eslint-disable-line

	return {
		updateAvailable,
	};
}

// Provider component that wraps your app and makes CheckForUpdate object ...
// ... available to any child component that calls useCheckForUpdate().
export function CheckForUpdateProvider({ children }) {
	const value = useCheckForUpdateProvider();
	return <CheckForUpdateContext.Provider value={value}>{children}</CheckForUpdateContext.Provider>;
}

CheckForUpdateProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
