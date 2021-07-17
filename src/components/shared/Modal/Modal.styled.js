import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: (props) => ({
		height: props.maxHeight ? '100%' : '',
	}),
	appBar: {
		position: 'relative',
	},
	children: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		overflowY: 'auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flex: 1,
		userSelect: 'none',
	},
}), {
	name: 'Modal',
});

export default useStyles;
