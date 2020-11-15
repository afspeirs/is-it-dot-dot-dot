import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Container from './components/Container';
import Routes from './components/Routes';

const App = () => (
	<ThemeProvider theme={theme}>
		<Container>
			<Routes />
		</Container>
	</ThemeProvider>
);

export default App;
