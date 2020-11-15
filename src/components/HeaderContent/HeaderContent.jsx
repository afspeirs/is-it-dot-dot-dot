import React from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	Tooltip,
	useMediaQuery,
} from '@material-ui/core';

const defaultProps = {
	forceLastIconEdge: false,
	headerItems: [],
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
};

const HeaderContent = ({ forceLastIconEdge, headerItems }) => {
	const mobile = useMediaQuery('(max-width:600px)');

	return (
		<>
			{headerItems.map((item, index) => (
				<Tooltip key={item.text} title={item.text}>
					{/* Wrapper element in case the Button is disabled */}
					<span>
						<IconButton
							aria-label={item.text}
							color="inherit"
							component={item.component}
							edge={((forceLastIconEdge || mobile) && index === headerItems.length - 1) && 'end'}
							onClick={item.onClick}
							to={item.to}
							disabled={item.disabled}
						>
							{item.icon}
						</IconButton>
					</span>
				</Tooltip>
			))}
		</>
	);
};

HeaderContent.defaultProps = defaultProps;
HeaderContent.propTypes = propTypes;

export default HeaderContent;
