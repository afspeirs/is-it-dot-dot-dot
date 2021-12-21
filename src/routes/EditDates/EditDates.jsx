import { Fragment } from 'react';
import {
	Box,
	Fab,
	Divider,
	MenuItem,
	IconButton,
	TextField,
} from '@mui/material';
import {
	Add as AddIcon,
	Delete as DeleteIcon,
} from '@mui/icons-material';

import Modal from '@/components/shared/Modal';
import { useDates } from '@/hooks/Dates';
import styles from './EditDates.styled';

const EditDates = () => {
	const {
		addDate,
		dates,
		deleteDate,
		setDates,
	} = useDates();

	const days = [...Array(31)].map((e, i) => i + 1);
	const months = [...Array(12)].map((e, i) => i + 1);
	const fabDisabled = dates.find((date) => date.name === '');

	const handleChangeSelect = (event) => {
		const { name, value } = event.target;
		const [key, idx] = name.split('-');
		const updatedDates = [...dates];
		updatedDates[idx][key] = value;
		setDates(updatedDates);
	};
	const handleChangeText = (event) => {
		const updatedDates = [...dates];
		const { idx, key } = event.target.dataset;
		updatedDates[idx][key] = event.target.value;
		setDates(updatedDates);
	};

	return (
		<Modal
			title="Edit Dates"
			titleDocument="Is it editing the Dates?"
		>
			<Box sx={styles.spacer}>
				{dates.map((date, index) => {
					const nameId = `name-${index}`;
					const dayId = `day-${index}`;
					const monthId = `month-${index}`;
					const valueYesId = `valueYes-${index}`;
					const valueNoId = `valueNo-${index}`;

					return (
						// eslint-disable-next-line react/no-array-index-key
						<Fragment key={`date-${index}`}>
							{index !== 0 && <Divider />}
							<Box
								component="form"
								sx={styles.form}
								noValidate
								autoComplete="off"
							>
								<Box sx={styles.formContainer}>
									<Box sx={styles.formContent}>
										<TextField
											id={nameId}
											name={nameId}
											label="Name"
											sx={styles.formText}
											value={date.name}
											onChange={handleChangeText}
											inputProps={{
												'data-idx': index,
												'data-key': 'name',
											}}
										/>
										<TextField
											select
											id={dayId}
											name={dayId}
											label="Day"
											value={parseInt(date.day, 10)}
											sx={styles.formDropdown}
											onChange={handleChangeSelect}
										>
											{days.map((value) => (
												<MenuItem key={value} value={value}>{value}</MenuItem>
											))}
										</TextField>
										<TextField
											select
											id={monthId}
											name={monthId}
											label="Month"
											value={parseInt(date.month, 10)}
											sx={styles.formDropdown}
											onChange={handleChangeSelect}
										>
											{months.map((value) => (
												<MenuItem key={value} value={value}>{value}</MenuItem>
											))}
										</TextField>
									</Box>
									<Box sx={styles.formContent}>
										<TextField
											id={valueYesId}
											name={valueYesId}
											label="Default Yes"
											placeholder="Yes"
											value={date.valueYes}
											sx={styles.formText}
											onChange={handleChangeText}
											inputProps={{
												'data-idx': index,
												'data-key': 'valueYes',
											}}
										/>
										<TextField
											id={valueNoId}
											name={valueNoId}
											label="Default No"
											placeholder="No"
											value={date.valueNo}
											sx={styles.formText}
											onChange={handleChangeText}
											inputProps={{
												'data-idx': index,
												'data-key': 'valueNo',
											}}
										/>
									</Box>
								</Box>
								<Box sx={styles.formEnd}>
									<IconButton
										aria-label="delete"
										onClick={() => deleteDate(index)}
										size="large"
									>
										<DeleteIcon />
									</IconButton>
								</Box>
							</Box>
						</Fragment>
					);
				})}
			</Box>

			<Fab
				color="primary"
				aria-label="add"
				sx={styles.fab}
				disabled={fabDisabled}
				onClick={() => addDate()}
			>
				<AddIcon />
			</Fab>
		</Modal>
	);
};

export default EditDates;
