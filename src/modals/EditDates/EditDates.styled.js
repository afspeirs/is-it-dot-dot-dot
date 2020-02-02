import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(3),
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
	},
	formContent: {
		display: 'flex',
		paddingTop: theme.spacing(2),
		'&:first-child': {
			paddingTop: 0,
		},
		'&> *': {
			paddingRight: theme.spacing(4),
		},
	},
	formEnd: {
		display: 'flex',
		alignItems: 'center',
	},
	formControl: {
		minWidth: 86,
	},
	formDropdown: {
		minWidth: 80,
	},
	formText: {
		flexGrow: 1,
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	spacer: {
		marginBottom: theme.spacing(8),
	},
}));

export default useStyles;
