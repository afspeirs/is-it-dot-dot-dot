import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	accountIcon: {
		width: '100%',
		height: '100%',
	},
	appbar: {
		position: 'relative',
	},
	children: {
		overflowY: 'auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flex: 1,
	},
}));

export default useStyles;
