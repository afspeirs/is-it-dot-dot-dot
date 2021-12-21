import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import {
	Edit as EditIcon,
	Settings as SettingsIcon,
} from '@mui/icons-material';

import DatesList from '@/components/DatesList';
import CheckForInstallPrompt from '@/components/shared/CheckForInstallPrompt';
import ListButton from '@/components/shared/ListButton';
import styles from './DrawerContent.styled';

const DrawerContent = () => (
	<>
		<List sx={styles.list} disablePadding>
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
			<CheckForInstallPrompt />

			<ListItem>
				<Typography variant="body2">This app informs you if it is the date specified</Typography>
			</ListItem>
			<ListItem>
				<Typography variant="body2">Add a date to show it in the list below</Typography>
			</ListItem>

			<Divider />

			<ListButton
				Icon={EditIcon}
				primary="Edit Dates"
				to="/edit-dates/"
			/>

			<ListButton
				Icon={SettingsIcon}
				primary="Settings"
				to="/settings/"
			/>
		</List>
	</>
);

export default DrawerContent;
