import React, { useState } from 'react';
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

const Navigation = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

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
						Is It ...
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
		</>
	);
};

export default Navigation;
