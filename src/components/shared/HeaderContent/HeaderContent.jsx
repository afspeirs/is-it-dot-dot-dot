import { useState } from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
	useMediaQuery,
} from '@material-ui/core';
import {
	MoreVert as MoreIcon,
} from '@material-ui/icons';

const defaultProps = {
	forceLastIconEdge: undefined,
	headerItems: [],
	disableOverflowMenu: false,
};

const propTypes = {
	forceLastIconEdge: PropTypes.bool,
	headerItems: PropTypes.arrayOf(
		PropTypes.shape({
			disabled: PropTypes.bool,
			icon: PropTypes.node,
			onClick: PropTypes.func,
			text: PropTypes.string,
		}),
	),
	disableOverflowMenu: PropTypes.bool,
};

const HeaderContent = ({
	forceLastIconEdge,
	headerItems,
	disableOverflowMenu,
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
								disabled={first.disabled}
								edge={((forceLastIconEdge || mobile) && rest.length === 0) ? 'end' : undefined}
								onClick={first.onClick}
								to={first.to}
							>
								{first.icon}
							</IconButton>
						</span>
					</Tooltip>

					{rest.length !== 0 && (
						<>
							<Tooltip title="Show More">
								<IconButton
									aria-controls="more-menu"
									aria-haspopup="true"
									aria-label="Show more"
									color="inherit"
									edge="end"
									onClick={handleClick}
								>
									<MoreIcon />
								</IconButton>
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
										disabled={item.disabled}
										edge={((forceLastIconEdge || mobile) && index === headerItems.length - 1) ? 'end' : undefined}
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
									disabled={item.disabled}
									edge={((forceLastIconEdge || mobile) && index === headerItems.length - 1) ? 'end' : undefined}
									onClick={item.onClick}
									to={item.to}
								>
									{item.icon}
								</IconButton>
							</span>
						</Tooltip>
					))}
				</>
			)}
		</>
	);
};

HeaderContent.defaultProps = defaultProps;
HeaderContent.propTypes = propTypes;

export default HeaderContent;
