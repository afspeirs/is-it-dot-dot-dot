import {
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {
	Delete as DeleteIcon,
} from '@material-ui/icons';

const CheckForUpdate = () => (
	<ListItem button onClick={() => localStorage.clear()}>
		<ListItemIcon>
			<DeleteIcon />
		</ListItemIcon>
		<ListItemText primary="Clear saved Dates" />
	</ListItem>
);

export default CheckForUpdate;
