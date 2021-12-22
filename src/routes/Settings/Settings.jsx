import {
	Divider,
	List,
} from '@mui/material';

import ChangePrimaryColor from '@/components/ChangePrimaryColor';
import ResetDates from '@/components/ResetDates';
import AppVersion from '@/components/shared/AppVersion';
import ChangeTheme from '@/components/shared/ChangeTheme';
import CheckForUpdate from '@/components/shared/CheckForUpdate';
import Modal from '@/components/shared/Modal';

const Settings = () => (
	<Modal title="Settings" titleDocument="Is it the Settings?">
		<List>
			<AppVersion />
			<CheckForUpdate />

			<Divider />

			<ChangeTheme />
			<ChangePrimaryColor />

			<Divider />

			<ResetDates />
		</List>
	</Modal>
);

export default Settings;
