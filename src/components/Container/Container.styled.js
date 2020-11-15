import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default useStyles;
