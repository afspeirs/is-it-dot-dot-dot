import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import UserConfirmation from './components/shared/UserConfirmation';
import { DatesProvider } from './hooks/Dates';
import { GlobalStateProvider } from './hooks/GlobalState';
import { SnackbarProvider } from './hooks/Snackbar';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter getUserConfirmation={(message, callback) => UserConfirmation(message, callback)}>
			<GlobalStateProvider>
				<SnackbarProvider>
					<DatesProvider>
						<App />
					</DatesProvider>
				</SnackbarProvider>
			</GlobalStateProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
