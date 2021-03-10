import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const RouterNavLink = forwardRef((props, ref) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<NavLink innerRef={ref} {...props} />
));

export default RouterNavLink;
