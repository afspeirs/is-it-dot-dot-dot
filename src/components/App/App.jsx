import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import useStyles from './App.styled';
import Navigation from '../Navigation';
import TabContainer from '../TabContainer';
import theme from '../../theme';

const App = () => {
	const [tab, setTab] = useState(0);
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.container}>
				<Navigation
					tab={tab}
					setTab={setTab}
				/>
				<TabContainer tab={tab} />
			</div>
		</ThemeProvider>
	);
};

export default App;
