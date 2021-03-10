import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		width: 'inherit',
		height: 'inherit',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text,
		backgroundColor: theme.palette.primary.main,
		zIndex: -1,
	},
	typography: {
		fontSize: '100px',
		fontWeight: 'bold',
	},
}));

export default useStyles;
