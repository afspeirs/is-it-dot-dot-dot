import { useState } from 'react';
import { CirclePicker } from 'react-color';
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	ColorLens as ColorLensIcon,
} from '@mui/icons-material';

import { useGlobalState } from '@/hooks/GlobalState';
import styles from './ChangePrimaryColor.styled';

const ChangePrimaryColor = () => {
	const [{ settings: { primaryColor } }, dispatch] = useGlobalState();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSetColor = (color) => dispatch({
		type: 'settings-primaryColor',
		value: color?.hex || '#464',
	});

	return (
		<>
			<ListItem button onClick={handleOpen}>
				<ListItemIcon>
					<ColorLensIcon />
				</ListItemIcon>
				<ListItemText
					primary="Change Primary colour"
					secondary={primaryColor}
				/>
			</ListItem>

			<Dialog
				aria-labelledby="change-theme-dialog"
				fullWidth
				maxWidth="xs"
				onClose={handleClose}
				open={open}
			>
				<DialogTitle id="change-theme-dialog">Change Theme</DialogTitle>

				<Box sx={styles.root}>
					<CirclePicker
						color={primaryColor}
						onChangeComplete={handleSetColor}
						width="100%"
					/>

					<Button
						sx={styles.button}
						onClick={() => handleSetColor()}
						variant="contained"
					>
						Reset to Default
					</Button>
				</Box>
			</Dialog>
		</>
	);
};

export default ChangePrimaryColor;
