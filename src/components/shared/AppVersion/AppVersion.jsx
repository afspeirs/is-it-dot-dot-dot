import {
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {
	Settings as SettingsIcon,
} from '@material-ui/icons';

const AppVersion = () => (
	<ListItem>
		<ListItemIcon>
			<SettingsIcon />
		</ListItemIcon>
		<ListItemText
			primary="App version"
			secondary={process.env.REACT_APP_VERSION}
		/>
	</ListItem>
);

export default AppVersion;
