import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
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
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		userSelect: 'none',
	},
}), {
	name: 'Modal',
});

export default useStyles;
