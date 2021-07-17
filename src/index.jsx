import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import UserConfirmation from './components/shared/UserConfirmation';
import { GlobalStateProvider } from './hooks/GlobalState';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter getUserConfirmation={(message, callback) => UserConfirmation(message, callback)}>
			<GlobalStateProvider>
				<App />
			</GlobalStateProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

registerServiceWorker();
