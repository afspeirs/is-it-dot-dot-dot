import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(3),
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	formControl: {
		minWidth: 86,
	},
	text: {
		maxWidth: '128px',
	},
	spacer: {
		marginBottom: theme.spacing(8),
	},
}));

export default useStyles;
