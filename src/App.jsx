import { useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, useMediaQuery } from '@material-ui/core';

import theme from './theme';
import Container from './components/Container';
import Routes from './components/Routes';
import ServiceWorkerContent from './components/shared/ServiceWorkerContent';
import { useGlobalState } from './hooks/GlobalState';
import { SnackbarProvider } from './hooks/Snackbar';

const App = () => {
	const [{ settings: { appTheme } }] = useGlobalState();
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const muiTheme = useMemo(
		() => createMuiTheme({
			palette: {
				...theme.palette,
				// eslint-disable-next-line no-nested-ternary
				type: appTheme === 'default' ? (prefersDarkMode ? 'dark' : 'light') : appTheme,
			},
		}),
		[prefersDarkMode, appTheme],
	);

	return (
		<ThemeProvider theme={muiTheme}>
			<SnackbarProvider>
				<CssBaseline />

				<Container>
					<Routes />
				</Container>

				<ServiceWorkerContent />
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
