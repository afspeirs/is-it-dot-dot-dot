import React from 'react';
import PropTypes from 'prop-types';
import {
	Fab,
	Divider,
	MenuItem,
	TextField,
} from '@material-ui/core';
import {
	Add as AddIcon,
} from '@material-ui/icons';

import useStyles from './EditDates.styled';
import Modal from '../../components/Modal';
import { useDates } from '../../hooks/DatesContext';

const EditDates = ({ open, handleClose }) => {
	const classes = useStyles();
	const { dates, setDates } = useDates();

	const blankDate = { day: 1, month: 1, name: '' };
	const days = [...Array(31)].map((e, i) => i + 1);
	const months = [...Array(12)].map((e, i) => i + 1);
	const fabDisabled = dates[dates.length - 1].name === '';

	const addDate = () => setDates([...dates, { ...blankDate }]);
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
			open={open}
			handleClose={handleClose}
		>
			<>
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
									<TextField
										id={nameId}
										name={nameId}
										label="Name"
										className={classes.text}
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
										value={date.day}
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
										value={date.month}
										onChange={handleChangeSelect}
									>
										{months.map((value) => (
											<MenuItem key={value} value={value}>{value}</MenuItem>
										))}
									</TextField>
									<TextField
										id={valueYesId}
										name={valueYesId}
										label="Default Yes"
										placeholder="Yes"
										value={date.valueYes}
										className={classes.text}
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
										className={classes.text}
										onChange={handleChangeText}
										inputProps={{
											'data-idx': index,
											'data-key': 'valueNo',
										}}
									/>
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
					onClick={addDate}
				>
					<AddIcon />
				</Fab>
			</>
		</Modal>
	);
};

EditDates.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default EditDates;
