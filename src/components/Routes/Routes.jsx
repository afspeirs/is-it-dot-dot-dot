import { useEffect } from 'react';
import {
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';

import EditDates from '@/routes/EditDates';
import Home from '@/routes/Home';
import Settings from '@/routes/Settings';

/**
 * Update this array with the routes that can be opened as modals
 */
export const arrayOfModals = [
	'/edit-dates/',
	'/settings/',
];

const Routes = () => {
	const location = useLocation();
	const isModal = arrayOfModals.findIndex((path) => location.pathname.startsWith(path)) !== -1;

	// Save window.previousLocation to sessionStorage for later
	// If the page reloads with a modal open it renders the 404 page instead of the HomePage
	useEffect(() => {
		if (window.previousLocation) {
			sessionStorage.setItem('previousLocation', JSON.stringify(window.previousLocation));
		} else {
			window.previousLocation = JSON.parse(sessionStorage.getItem('previousLocation'));
		}
	}, []);

	useEffect(() => {
		if (!isModal) {
			window.previousLocation = location;
		}
	}, [location]);

	return (
		<>
			<Switch location={isModal ? window.previousLocation : location}>
				<Route exact path="/" component={Home} />
				<Route path="/:name" component={Home} />
			</Switch>

			<Switch>
				<Route path="/edit-dates/" component={EditDates} />
				<Route path="/settings/" component={Settings} />
			</Switch>
		</>
	);
};

export default Routes;
