import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
	'&.active': {
		backgroundColor: theme.palette.action.focus,
	},
}));
