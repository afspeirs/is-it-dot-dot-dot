import { forwardRef } from 'react';

import { NavLinkStyled } from './RouterNavLink.styled';

const RouterNavLink = forwardRef((props, ref) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<NavLinkStyled innerRef={ref} {...props} />
));

export default RouterNavLink;
