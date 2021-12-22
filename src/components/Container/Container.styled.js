const styles = {
	appBar: {
		color: 'primary.contrastText',
	},
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'primary.main',
		color: 'text.primary',
	},
	content: {
		position: 'relative',
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		overflowX: 'hidden',
	},
	drawer: {
		flexShrink: 0,
		width: '80%',
		maxWidth: 'calc(env(safe-area-inset-left) + 320px)',
		'& .MuiDrawer-paper': {
			width: 'inherit',
			maxWidth: 'inherit',
			paddingTop: 'env(safe-area-inset-top)',
			paddingBottom: 'env(safe-area-inset-bottom)',
			paddingLeft: 'env(safe-area-inset-left)',
		},
	},
	menuButton: {
		mr: 2,
	},
	title: {
		flexGrow: 1,
		userSelect: 'none',
	},
};

export default styles;
