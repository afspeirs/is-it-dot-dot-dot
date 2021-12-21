import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Prompt, useHistory } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
	AppBar,
	Box,
	Dialog,
	IconButton,
	Slide,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	Close as CloseIcon,
} from '@mui/icons-material';

import HeaderContent from '@/components/shared/HeaderContent';
import styles from './Modal.styled';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = forwardRef((props, ref) => <Slide ref={ref} {...props} />);

const defaultProps = {
	fullscreen: false,
	headerItems: [],
	maxWidth: 'sm',
	showPrompt: false,
	title: '',
	titleDocument: undefined,
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
	maxWidth: PropTypes.oneOf([
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		false,
	]),
	showPrompt: PropTypes.bool,
	title: PropTypes.string,
	titleDocument: PropTypes.string,
};

const Modal = ({
	children,
	fullscreen,
	headerItems,
	maxWidth,
	showPrompt,
	title,
	titleDocument,
}) => {
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
			<Helmet>
				<title>{titleDocument || `${title} | ${import.meta.env.VITE_APP_TITLE}`}</title>
			</Helmet>

			<Dialog
				aria-labelledby={`${title}-modal-title`}
				BackdropProps={{
					invisible: mobile,
				}}
				fullScreen={fullScreenModal}
				fullWidth
				maxWidth={maxWidth}
				onClose={handleClose}
				open={open}
				PaperProps={{
					sx: styles.paper,
				}}
				TransitionComponent={Transition}
				TransitionProps={{
					direction: mobile ? 'left' : 'up',
				}}
			>
				<AppBar
					position="relative"
					sx={fullScreenModal ? styles.appBarPadding : null}
				>
					<Toolbar>
						{fullScreenModal && (
							<IconButton
								aria-label="close"
								color="inherit"
								edge="start"
								onClick={handleClose}
								sx={styles.menuButton}
							>
								<ArrowBackIcon />
							</IconButton>
						)}
						<Typography
							component="h2"
							id={`${title}-modal-title`}
							noWrap
							sx={styles.title}
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
				<Box
					sx={{
						...styles.children,
						...fullScreenModal && styles.childrenPadding,
					}}
				>
					{children}
				</Box>
			</Dialog>

			<Prompt when={showPrompt} message="Are you sure you want to leave without saving?" />
		</>
	);
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

export default Modal;
