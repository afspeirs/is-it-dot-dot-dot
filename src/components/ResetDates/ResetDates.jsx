import {
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	Delete as DeleteIcon,
} from '@mui/icons-material';
import { useConfirm } from 'material-ui-confirm';

import { useDates } from '@/hooks/Dates';

const ResetDates = () => {
	const confirm = useConfirm();
	const { resetDates } = useDates();

	const handleClick = () => confirm({
		title: 'Are you sure you want to reset the saved dates?',
		cancellationText: 'No',
		confirmationText: 'Yes',
	})
		.then(resetDates);

	return (
		<ListItem button onClick={handleClick}>
			<ListItemIcon>
				<DeleteIcon />
			</ListItemIcon>
			<ListItemText primary="Reset Dates" />
		</ListItem>
	);
};

export default ResetDates;
