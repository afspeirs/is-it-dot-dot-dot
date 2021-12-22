// import queryString from 'query-string';
import {
	ListItem,
	// ListItemIcon,
	ListSubheader,
	ListItemText,
} from '@mui/material';
import {
	Event as EventIcon,
} from '@mui/icons-material';

import ListButton from '@/components/shared/ListButton';
import { useDates } from '@/hooks/Dates';
import { toKebabCase } from '@/utils';
import styles from './DatesList.styled';

const LabelsList = () => {
	const { dates } = useDates();

	return (
		<>
			<ListSubheader sx={styles.listSubheader}>
				Dates
			</ListSubheader>
			{dates.length === 0 && (
				<ListItem>
					<ListItemText primary="No dates found" />
				</ListItem>
			)}
			{dates.map((date) => (
				<ListButton
					key={date.name}
					Icon={EventIcon}
					primary={date.name}
					to={`/${toKebabCase(date.name)}/`}
				/>
			))}
		</>
	);
};

export default LabelsList;
