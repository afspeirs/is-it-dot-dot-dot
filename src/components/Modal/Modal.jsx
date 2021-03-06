import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Prompt, useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
	AppBar,
	Dialog,
	IconButton,
	Slide,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import {
	ArrowBack as ArrowBackIcon,
	Close as CloseIcon,
} from '@material-ui/icons';

import useStyles from './Modal.styled';
import HeaderContent from '../HeaderContent';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = forwardRef((props, ref) => <Slide ref={ref} {...props} />);

const defaultProps = {
	fullscreen: false,
	headerItems: [],
	maxHeight: false,
	maxWidth: 'sm',
	showPrompt: false,
	title: 'Modal',
};

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	fullscreen: PropTypes.bool,
	headerItems: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.node,
			onClick: PropTypes.func,
			text: PropTypes.string,
		}),
	),
	maxHeight: PropTypes.bool,
	maxWidth: PropTypes.string,
	showPrompt: PropTypes.bool,
	title: PropTypes.string,
};

const Modal = ({
	children,
	fullscreen,
	headerItems,
	maxHeight,
	maxWidth,
	showPrompt,
	title,
}) => {
	const classes = useStyles({ maxHeight });
	const history = useHistory();
	const [open, setOpen] = useState(true);
	const { breakpoints } = useTheme();
	const mobile = !useMediaQuery(breakpoints.up(maxWidth)); // Matches below the breakpoint
	const fullScreenModal = fullscreen || mobile;

	const handleClose = (event) => {
		event.stopPropagation();
		setTimeout(() => history.goBack(), 250);
		if (!showPrompt) setOpen(false);
	};

	return (
		<>
			<Dialog
				aria-labelledby={`${title}-modal-title`}
				fullScreen={fullScreenModal}
				fullWidth
				maxWidth={maxWidth}
				onClose={handleClose}
				open={open}
				PaperProps={{
					className: classes.root,
				}}
				TransitionComponent={Transition}
				TransitionProps={{
					direction: mobile ? 'left' : 'up',
				}}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						{fullScreenModal && (
							<IconButton
								aria-label="close"
								className={classes.menuButton}
								color="inherit"
								edge="start"
								onClick={handleClose}
							>
								<ArrowBackIcon />
							</IconButton>
						)}
						<Typography
							className={classes.title}
							component="h2"
							id={`${title}-modal-title`}
							variant="h6"
						>
							{title}
						</Typography>
						<HeaderContent
							forceLastIconEdge={mobile}
							headerItems={headerItems}
						/>
						{!fullScreenModal && (
							<IconButton
								aria-label="close"
								color="inherit"
								edge="end"
								onClick={handleClose}
							>
								<CloseIcon />
							</IconButton>
						)}
					</Toolbar>
				</AppBar>
				<div className={classes.children}>
					{children}
				</div>
			</Dialog>

			<Prompt when={showPrompt} message="Are you sure you want to leave without saving?" />
		</>
	);
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

export default Modal;
