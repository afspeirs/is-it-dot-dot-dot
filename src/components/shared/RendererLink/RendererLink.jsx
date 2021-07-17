import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	href: PropTypes.string.isRequired,
};

const RendererLink = ({ children, href }) => (
	<a href={href} target="_blank" rel="noopener noreferrer">
		{children}
	</a>
);

RendererLink.propTypes = propTypes;

export default RendererLink;
