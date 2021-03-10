import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const RouterLink = forwardRef((props, ref) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Link innerRef={ref} {...props} />
));

export default RouterLink;
