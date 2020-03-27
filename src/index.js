import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'material-ui-snackbar-provider';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { CheckForUpdateProvider } from './hooks/CheckForUpdateContext';
import { DatesProvider } from './hooks/DatesContext';

ReactDOM.render((
	<SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
		<DatesProvider>
			<CheckForUpdateProvider>
				<App />
			</CheckForUpdateProvider>
		</DatesProvider>
	</SnackbarProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
