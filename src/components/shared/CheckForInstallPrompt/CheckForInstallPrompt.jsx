import {
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	Tooltip,
} from '@mui/material';
import {
	AddToHomeScreen as AddToHomeScreenIcon,
	Cancel as CancelIcon,
} from '@mui/icons-material';

import { useGlobalState } from '@/hooks/GlobalState';

const CheckForInstallPrompt = () => {
	const [{ beforeInstallPrompt }, dispatch] = useGlobalState();

	const handleDismissClick = () => dispatch({
		type: 'app-beforeInstallPrompt',
		value: false,
	});

	const handleInstallClick = async () => {
		beforeInstallPrompt.prompt();

		const outcome = await beforeInstallPrompt.userChoice;
		if (outcome.outcome === 'accepted') {
			dispatch({
				type: 'app-beforeInstallPrompt',
				value: false,
			});
		}
	};

	return beforeInstallPrompt ? (
		<>
			<ListItem button onClick={handleInstallClick}>
				<ListItemIcon>
					<AddToHomeScreenIcon />
				</ListItemIcon>
				<ListItemText primary={`Install ${import.meta.env.VITE_APP_TITLE}`} />
				<ListItemSecondaryAction>
					<Tooltip title="Dismiss" placement="left">
						<IconButton
							aria-label="dismiss"
							color="inherit"
							edge="end"
							onClick={handleDismissClick}
						>
							<CancelIcon color="action" />
						</IconButton>
					</Tooltip>
				</ListItemSecondaryAction>
			</ListItem>
			<Divider />
		</>
	) : null;
};

export default CheckForInstallPrompt;
