import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	list: {
		flexGrow: 1,
		overflowY: 'auto',
		overflowX: 'hidden',
		'& .MuiTabs-indicator': {
			backgroundColor: 'rgba(0, 0, 0, 0.15)',
			width: '100%',
			zIndex: -1,
		},
	},
}));

export default useStyles;
