import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	IconButton,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import useStyles from './Navigation.styled';
import DrawerContent from '../DrawerContent';
import { useDates } from '../../hooks/DatesContext';

const Navigation = ({
	tab,
	setTab,
}) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const { dates } = useDates();

	const handleTabChange = (event, newTab) => {
		setOpen(false);
		setTab(newTab);
	};

	return (
		<>
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
					<Typography variant="h6" className={classes.title}>
						{`Is it ${dates[tab].name}?`}
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
				<DrawerContent
					tab={tab}
					handleTabChange={handleTabChange}
				/>
			</SwipeableDrawer>
		</>
	);
};

Navigation.propTypes = {
	tab: PropTypes.number.isRequired,
	setTab: PropTypes.func.isRequired,
};

export default Navigation;
