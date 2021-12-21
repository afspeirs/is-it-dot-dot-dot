import { useState } from 'react';
import {
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	Brush as BrushIcon,
} from '@mui/icons-material';

import { useGlobalState } from '@/hooks/GlobalState';
import options from './data';

const ChangeTheme = () => {
	const [{ settings: { appTheme } }, dispatch] = useGlobalState();
	const [open, setOpen] = useState(false);
	// eslint-disable-next-line max-len
	const [selectedIndex, setSelectedIndex] = useState(options.findIndex((item) => item.value === appTheme));

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClickMenuItem = (index) => {
		setSelectedIndex(index);
		setOpen(false);

		dispatch({
			type: 'settings-appTheme',
			value: options[index].value,
		});
	};

	return (
		<>
			<ListItem button onClick={handleOpen}>
				<ListItemIcon>
					<BrushIcon />
				</ListItemIcon>
				<ListItemText
					primary="Theme"
					secondary={options[selectedIndex].text}
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
				<List>
					{options.map((option, index) => (
						<ListItem
							key={option.text}
							button
							onClick={() => handleClickMenuItem(index)}
							selected={index === selectedIndex}
							autoFocus={index === selectedIndex}
						>
							<ListItemText primary={option.text} />
						</ListItem>
					))}
				</List>
			</Dialog>
		</>
	);
};

export default ChangeTheme;
