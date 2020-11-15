import React, { useEffect } from 'react';
import {
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';

import EditDates from '../../modals/EditDates';
import Settings from '../../modals/Settings';
import HomePage from '../../pages/HomePage';
import NoPage from '../../pages/NoPage';

const Routes = () => {
	const location = useLocation();
	const isModal = !!(location?.state?.modal && window.previousLocation !== location);
	const currentLocation = isModal ? window.previousLocation : location;

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
		if (!location?.state?.modal) {
			window.previousLocation = location;
		}
	}, [location]);

	return (
		<>
			<Switch location={currentLocation}>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/:name" component={HomePage} />
				<Route component={NoPage} />
			</Switch>

			{isModal && (
				<Switch>
					<Route path="/edit-dates/" component={EditDates} />
					<Route path="/settings/" component={Settings} />
				</Switch>
			)}
		</>
	);
};

export default Routes;
