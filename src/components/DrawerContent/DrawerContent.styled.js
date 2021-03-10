import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list: {
		flexGrow: 1,
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: theme.palette.background.paper,
		'& .MuiTabs-indicator': {
			backgroundColor: 'rgba(0, 0, 0, 0.15)',
			width: '100%',
			zIndex: -1,
		},
	},
}));

export default useStyles;
