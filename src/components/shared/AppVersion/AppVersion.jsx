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
			secondary={import.meta.env.PACKAGE_VERSION}
		/>
	</ListItem>
);

export default AppVersion;
