import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Navigation = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" elevation={0}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Is It ...
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navigation;
