const styles = {
	form: {
		display: 'flex',
		p: 3,
		gap: 2,
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
	},
	formContent: {
		display: 'flex',
		gap: 4,
		pt: 2,
		'&:first-of-type': {
			paddingTop: 0,
		},
	},
	formEnd: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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
		bottom: 16,
		right: 16,
	},
	spacer: {
		mb: 8,
	},
};

export default styles;
