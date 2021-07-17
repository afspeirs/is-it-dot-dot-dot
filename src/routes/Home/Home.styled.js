import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: 0,
		width: 'inherit',
		height: 'inherit',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	typography: {
		fontSize: '100px',
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default useStyles;
