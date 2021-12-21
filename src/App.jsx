import { useMemo } from 'react';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ConfirmProvider } from 'material-ui-confirm';

import theme from './theme';
import Container from './components/Container';
import Routes from './components/Routes';
import ServiceWorkerContent from './components/shared/ServiceWorkerContent';
import { DatesProvider } from './hooks/Dates';
import { useGlobalState } from './hooks/GlobalState';
import { SnackbarProvider } from './hooks/Snackbar';

const App = () => {
	const [{ settings: { appTheme } }] = useGlobalState();
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const muiTheme = useMemo(
		() => createTheme({
			palette: {
				...theme.palette,
				// eslint-disable-next-line no-nested-ternary
				mode: appTheme === 'default' ? (prefersDarkMode ? 'dark' : 'light') : appTheme,
			},
		}),
		[prefersDarkMode, appTheme],
	);

	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={muiTheme}>
				<ConfirmProvider>
					<SnackbarProvider>
						<DatesProvider>
							<Container>
								<Routes />
							</Container>
						</DatesProvider>
						<ServiceWorkerContent />
					</SnackbarProvider>
				</ConfirmProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
