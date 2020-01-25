import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = ({
	children,
	index,
	value,
	...other
}) => (
	<Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
	>
		{value === index && <Box p={3}>{children}</Box>}
	</Typography>
);

TabPanel.propTypes = {
	children: PropTypes.node.isRequired,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: theme.palette.text,
		display: 'flex',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

const TabContainer = ({ tab }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TabPanel value={tab} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={tab} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={tab} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={tab} index={3}>
				Item Four
			</TabPanel>
			<TabPanel value={tab} index={4}>
				Item Five
			</TabPanel>
			<TabPanel value={tab} index={5}>
				Item Six
			</TabPanel>
			<TabPanel value={tab} index={6}>
				Item Seven
			</TabPanel>
		</div>
	);
};

TabContainer.propTypes = {
	tab: PropTypes.number.isRequired,
};

export default TabContainer;
