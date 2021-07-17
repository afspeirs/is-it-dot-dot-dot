import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list: {
		flexGrow: 1,
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	listItem: {
		'&.active': {
			backgroundColor: theme.palette.action.focus,
		},
	},
}));

export default useStyles;
