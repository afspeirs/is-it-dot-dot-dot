import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Navigation from '../Navigation';
import TabContainer from '../TabContainer';
import theme from '../../theme';

const App = () => {
	const [tab, setTab] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<Navigation
				tab={tab}
				setTab={setTab}
			/>
			<TabContainer tab={tab} />
		</ThemeProvider>
	);
};

export default App;
