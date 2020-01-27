import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(3),
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	formControl: {
		minWidth: 86,
	},
	text: {
		maxWidth: '128px',
	},
}));

export default useStyles;
