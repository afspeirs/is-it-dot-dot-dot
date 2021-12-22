import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
	useMediaQuery,
} from '@mui/material';
import {
	MoreVert as MoreIcon,
} from '@mui/icons-material';

const defaultProps = {
	disableOverflowMenu: false,
	disableHeaderItems: false,
	headerItems: [],
};

const propTypes = {
	disableOverflowMenu: PropTypes.bool,
	disableHeaderItems: PropTypes.bool,
	headerItems: PropTypes.arrayOf(
		PropTypes.shape({
			disabled: PropTypes.bool,
			extra: PropTypes.node,
			icon: PropTypes.node,
			onClick: PropTypes.func,
			text: PropTypes.string,
		}),
	),
};

const HeaderContent = ({
	disableOverflowMenu,
	disableHeaderItems,
	headerItems,
}) => {
	const mobile = useMediaQuery('(max-width:600px)');
	const [anchorEl, setAnchorEl] = useState();
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(undefined);
	const [first, ...rest] = headerItems;

	return (
		<>
			{(mobile && !disableOverflowMenu) && first ? (
				<>
					<Tooltip key={first.text} title={first.text}>
						{/* Wrapper element in case the Button is disabled */}
						<span>
							<IconButton
								aria-label={first.text}
								color="inherit"
								component={first.component}
								disabled={disableHeaderItems || first.disabled}
								edge={rest.length === 0 ? 'end' : null}
								onClick={first.onClick}
								size="large"
								to={first.to}
							>
								{first.icon}
							</IconButton>
						</span>
					</Tooltip>
					{first.extra}

					{rest.length !== 0 && (
						<>
							<Tooltip title="Show More">
								{/* Wrapper element in case the Button is disabled */}
								<span>
									<IconButton
										aria-controls="more-menu"
										aria-haspopup="true"
										aria-label="Show more"
										color="inherit"
										disabled={disableHeaderItems}
										edge="end"
										onClick={handleClick}
										size="large"
									>
										<MoreIcon />
									</IconButton>
								</span>
							</Tooltip>

							<Menu
								id="more-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								{rest.map((item, index) => (
									<MenuItem
										key={item.text}
										aria-label={item.text}
										color="inherit"
										component={item.component}
										disabled={disableHeaderItems || item.disabled}
										edge={index === headerItems.length - 1 ? 'end' : null}
										onClick={() => {
											handleClose();
											item.onClick();
										}}
										to={item.to}
									>
										<ListItemIcon
											color="inherit"
											aria-label="Create Note"
											edge="start"
										>
											{item.icon}
										</ListItemIcon>
										<span>{item.text}</span>
									</MenuItem>
								))}
							</Menu>

							{rest.map((item) => (
								<Fragment key={item.text}>
									{item.extra}
								</Fragment>
							))}
						</>
					)}
				</>
			) : (
				<>
					{headerItems.map((item, index) => (
						<Tooltip key={item.text} title={item.text}>
							{/* Wrapper element in case the Button is disabled */}
							<span>
								<IconButton
									aria-label={item.text}
									color="inherit"
									component={item.component}
									disabled={disableHeaderItems || item.disabled}
									edge={index === headerItems.length - 1 ? 'end' : null}
									onClick={item.onClick}
									size="large"
									to={item.to}
								>
									{item.icon}
								</IconButton>
							</span>
						</Tooltip>
					))}

					{headerItems.map((item) => (
						<Fragment key={item.text}>
							{item.extra}
						</Fragment>
					))}
				</>
			)}
		</>
	);
};

HeaderContent.defaultProps = defaultProps;
HeaderContent.propTypes = propTypes;

export default HeaderContent;
