import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import {
	Edit as EditIcon,
	Settings as SettingsIcon,
} from '@material-ui/icons';

import DatesList from '@/components/DatesList';
import RouterLink from '@/components/shared/RouterLink';
import useStyles from './DrawerContent.styled';

const DrawerContent = () => {
	const classes = useStyles();

	return (
		<>
			<List className={classes.list} disablePadding>
				<ListItem>
					<ListItemText
						primary={import.meta.env.VITE_APP_TITLE}
						primaryTypographyProps={{
							color: 'textSecondary',
							component: 'h1',
							variant: 'h5',
						}}
						secondary={import.meta.env.PACKAGE_VERSION}
						secondaryTypographyProps={{
							component: 'span',
						}}
					/>
				</ListItem>

				<DatesList />
			</List>

			<Divider />

			<List disablePadding>
				<ListItem>
					<Typography variant="body2">This app informs you if it is the date specified</Typography>
				</ListItem>
				<ListItem>
					<Typography variant="body2">Add a date to show it in the list below</Typography>
				</ListItem>

				<Divider />

				<ListItem
					button
					component={RouterLink}
					to="/edit-dates/"
				>
					<ListItemIcon>
						<EditIcon />
					</ListItemIcon>
					<ListItemText primary="Edit Dates" />
				</ListItem>

				<ListItem
					button
					component={RouterLink}
					to="/settings/"
				>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
		</>
	);
};

export default DrawerContent;
