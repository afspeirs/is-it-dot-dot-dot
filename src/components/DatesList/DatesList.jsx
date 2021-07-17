import {
	ListItem,
	ListItemIcon,
	ListSubheader,
	ListItemText,
} from '@material-ui/core';
import {
	Event as EventIcon,
} from '@material-ui/icons';

import RouterNavLink from '@/components/shared/RouterNavLink';
import { useDates } from '@/hooks/Dates';
import { toKebabCase } from '@/utils';
import useStyles from './DatesList.styled';

const LabelsList = () => {
	const { dates } = useDates();
	const classes = useStyles();

	return (
		<>
			<ListSubheader className={classes.listSubheader}>
				Dates
			</ListSubheader>
			{dates.length === 0 && (
				<ListItem>
					<ListItemText primary="No dates found" />
				</ListItem>
			)}
			{dates.map((date) => (
				<ListItem
					key={date.name}
					button
					exact
					to={`/${toKebabCase(date.name)}/`}
					className={classes.listItem}
					component={RouterNavLink}
				>
					<ListItemIcon>
						<EventIcon />
					</ListItemIcon>
					<ListItemText
						primary={date.name}
						primaryTypographyProps={{
							noWrap: true,
						}}
					/>
				</ListItem>
			))}
		</>
	);
};

export default LabelsList;
