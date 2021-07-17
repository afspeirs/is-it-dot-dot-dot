import {
	Divider,
	List,
} from '@material-ui/core';

import ClearDates from '@/components/ClearDates';
import AppVersion from '@/components/shared/AppVersion';
import ChangeTheme from '@/components/shared/ChangeTheme';
import CheckForInstallPrompt from '@/components/shared/CheckForInstallPrompt';
import CheckForUpdate from '@/components/shared/CheckForUpdate';
import Modal from '@/components/shared/Modal';

const Settings = () => (
	<Modal title="Settings" titleDocument="Is it the Settings?">
		<List>
			<CheckForInstallPrompt />

			<AppVersion />
			<CheckForUpdate />

			<Divider />

			<ChangeTheme />

			<Divider />

			<ClearDates />
		</List>
	</Modal>
);

export default Settings;
