import React from 'react';
import {
	Fab,
	Divider,
	MenuItem,
	IconButton,
	TextField,
} from '@material-ui/core';
import {
	Add as AddIcon,
	Delete as DeleteIcon,
} from '@material-ui/icons';

import Modal from '@/components/shared/Modal';
import { useDates } from '@/hooks/Dates';
import useStyles from './EditDates.styled';

const EditDates = () => {
	const classes = useStyles();
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
			maxHeight
		>
			<div className={classes.spacer}>
				{dates.map((date, index) => {
					const nameId = `name-${index}`;
					const dayId = `day-${index}`;
					const monthId = `month-${index}`;
					const valueYesId = `valueYes-${index}`;
					const valueNoId = `valueNo-${index}`;

					return (
						// eslint-disable-next-line react/no-array-index-key
						<React.Fragment key={`date-${index}`}>
							{index !== 0 && <Divider />}
							<form
								className={classes.root}
								noValidate
								autoComplete="off"
							>
								<div className={classes.formContainer}>
									<div className={classes.formContent}>
										<TextField
											id={nameId}
											name={nameId}
											label="Name"
											className={classes.formText}
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
											className={classes.formDropdown}
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
											className={classes.formDropdown}
											onChange={handleChangeSelect}
										>
											{months.map((value) => (
												<MenuItem key={value} value={value}>{value}</MenuItem>
											))}
										</TextField>
									</div>
									<div className={classes.formContent}>
										<TextField
											id={valueYesId}
											name={valueYesId}
											label="Default Yes"
											placeholder="Yes"
											value={date.valueYes}
											className={classes.formText}
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
											className={classes.formText}
											onChange={handleChangeText}
											inputProps={{
												'data-idx': index,
												'data-key': 'valueNo',
											}}
										/>
									</div>
								</div>
								<div className={classes.formEnd}>
									<IconButton aria-label="delete" onClick={() => deleteDate(index)}>
										<DeleteIcon />
									</IconButton>
								</div>
							</form>
						</React.Fragment>
					);
				})}
			</div>

			<Fab
				color="primary"
				aria-label="add"
				className={classes.fab}
				disabled={fabDisabled}
				onClick={() => addDate()}
			>
				<AddIcon />
			</Fab>
		</Modal>
	);
};

export default EditDates;
