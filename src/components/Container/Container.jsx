import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import {
	Box,
	AppBar,
	IconButton,
	Drawer,
	Toolbar,
	Typography,
} from '@mui/material';
import {
	Menu as MenuIcon,
	Share as ShareIcon,
} from '@mui/icons-material';

import DrawerContent from '@/components/DrawerContent';
import HeaderContent from '@/components/shared/HeaderContent';
import { useDates } from '@/hooks/Dates';
import { useHotkeys } from '@/hooks/Hotkeys';
import { useSnackbar } from '@/hooks/Snackbar';
import styles from './Container.styled';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const Container = ({ children }) => {
	const { selectedDate } = useDates();
	const history = useHistory();
	const snackbar = useSnackbar();
	const [drawerOpen, setDrawerOpen] = useState(false);

	// TODO: Add useMemo here

	const headerItems = useMemo(() => [
		{
			icon: <ShareIcon />,
			onClick: async () => {
				const title = `Is it ${selectedDate.name}`;
				const url = `${document.location.origin}/?${queryString.stringify(selectedDate)}`;

				if (navigator.share) {
					await navigator.share({ title, url })
						.catch(console.error); // eslint-disable-line no-console
				} else if (navigator.clipboard) {
					await navigator.clipboard.writeText(url)
						.then(() => {
							snackbar.showMessage({
								message: `Copied shareable link to "Is it ${selectedDate?.name}"}`,
							});
						})
						.catch(console.error); // eslint-disable-line no-console
				}
			},
			text: `Share "Is it ${selectedDate?.name}"`,
			visible: Boolean(navigator.share || navigator.clipboard),
		},
	].filter((item) => item.visible !== false), [selectedDate]);

	// Close drawer only in mobile
	const handleDrawerClose = () => setDrawerOpen(false);

	// Toggle drawer only in mobile unless toggle is true
	const handleDrawerToggle = () => setDrawerOpen((prevState) => !prevState);

	useHotkeys([
		// B = Toggle sidebar
		{
			keys: ['b'],
			callback: (event) => {
				event.preventDefault();
				setDrawerOpen((prevState) => !prevState);
			},
			metaModifier: true,
		},
		// P or S = Disable Event
		{
			keys: ['p', 's'],
			callback: (event) => event.preventDefault(),
			metaModifier: true,
		},
	]);

	// Run handleDrawerClose if the history changes
	useEffect(() => {
		const unlisten = history.listen(handleDrawerClose);
		return unlisten;
	}, [history]);

	return (
		<Box sx={styles.container}>
			<Helmet>
				<title>{`Is it ${selectedDate?.name || '...'}?`}</title>
			</Helmet>

			<AppBar color="transparent" elevation={0} sx={styles.appBar}>
				<Toolbar>
					<IconButton
						sx={styles.menuButton}
						color="inherit"
						aria-label="Open drawer"
						edge="start"
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
					<Typography sx={styles.title} component="h1" variant="h6" noWrap>
						{`Is it ${selectedDate?.name || '...'}?`}
					</Typography>
					<HeaderContent
						forceLastIconEdge
						headerItems={headerItems}
						disableOverflowMenu
					/>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="temporary"
				anchor="left"
				open={drawerOpen}
				sx={styles.drawer}
				onClose={handleDrawerClose}
				ModalProps={{ keepMounted: true }}
			>
				<DrawerContent />
			</Drawer>

			{children}
		</Box>
	);
};

Container.propTypes = propTypes;

export default Container;
