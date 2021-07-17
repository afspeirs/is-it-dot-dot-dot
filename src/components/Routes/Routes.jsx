import { Route, Switch } from 'react-router-dom';

import EditDates from '@/routes/EditDates';
import Home from '@/routes/Home';
import Settings from '@/routes/Settings';

const Routes = () => (
	<>
		<Switch>
			<Route path="/:name" component={Home} />
			<Route path="/" component={Home} />
		</Switch>

		<Switch>
			<Route path="/edit-dates/" component={EditDates} />
			<Route path="/settings/" component={Settings} />
		</Switch>
	</>
);

/**
 * Update this array with the routes that can be opened as modals
 */
const arrayOfPaths = [
	'/edit-dates/',
	'/settings/',
];

export const isModal = (pathname) => arrayOfPaths
	.findIndex((path) => pathname.startsWith(path)) !== -1;

export default Routes;
