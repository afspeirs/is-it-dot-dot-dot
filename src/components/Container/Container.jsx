import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import {
	AppBar,
	IconButton,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import useStyles from './Container.styled';
import DrawerContent from '../DrawerContent';
import { useDates } from '../../hooks/Dates';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const Container = ({ children }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const { selectedDate } = useDates();
	const history = useHistory();

	const handleTabChange = () => setOpen(false);

	// Run handleDrawerClose if the history changes
	useEffect(() => {
		const unlisten = history.listen(handleTabChange);
		return unlisten;
	}, [history]); // eslint-disable-line

	return (
		<div className={classes.container}>
			<Helmet>
				<title>{`Is it ${selectedDate?.name || '...'}?`}</title>
			</Helmet>

			<AppBar position="static" elevation={0}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" className={classes.title}>
						{`Is it ${selectedDate?.name || '...'}?`}
					</Typography>
				</Toolbar>
			</AppBar>

			<SwipeableDrawer
				variant="temporary"
				anchor="left"
				open={open}
				className={classes.drawer}
				classes={{
					paper: classes.drawerPaper,
				}}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				ModalProps={{ keepMounted: true }}
			>
				<DrawerContent />
			</SwipeableDrawer>

			{children}
		</div>
	);
};

Container.propTypes = propTypes;

export default Container;
