import React from 'react';
import PropTypes from 'prop-types';
import {
	MenuItem,
	TextField,
	Divider,
} from '@material-ui/core';

import useStyles from './EditDates.styled';
import Modal from '../../components/Modal';
import { useDates } from '../../hooks/DatesContext';

const EditDates = ({
	open,
	handleClose,
}) => {
	const classes = useStyles();
	const { dates, updateDate } = useDates();

	const handleChange = (event) => {
		event.preventDefault();
		// console.log(event.target);
		const { name, value } = event.target;
		updateDate(value, name);
		// setAge(event.target.value);
	};

	const days = [...Array(31)].map((e, i) => i + 1);
	const months = [...Array(12)].map((e, i) => i + 1);
	// console.log(days, months);

	return (
		<Modal
			title="Edit Dates"
			open={open}
			handleClose={handleClose}
		>
			<>
				{dates.map((date, index) => (
					<React.Fragment key={date.name}>
						{index !== 0 && <Divider />}
						<form
							className={classes.root}
							noValidate
							autoComplete="off"
						>
							<TextField
								id={`${date.name}-name`}
								label="Name"
								name={`${index},name`}
								className={classes.text}
								value={date.name}
								onChange={handleChange}
							/>
							<TextField
								select
								id={`${date.name}-day`}
								name={`${index},day`}
								label="Day"
								value={date.day}
								onChange={handleChange}
							>
								{days.map((value) => (
									<MenuItem key={value} value={value}>{value}</MenuItem>
								))}
							</TextField>
							<TextField
								select
								id={`${date.name}-month`}
								name={`${index},month`}
								label="Month"
								value={date.month}
								onChange={handleChange}
							>
								{months.map((value) => (
									<MenuItem key={value} value={value}>{value}</MenuItem>
								))}
							</TextField>
							<TextField
								id={`${date.name}-value-yes`}
								name={`${index},valueYes`}
								label="Default Yes"
								placeholder="Yes"
								value={date.valueYes}
								className={classes.text}
								onChange={handleChange}
							/>
							<TextField
								id={`${date.name}-value-no`}
								name={`${index},valueNo`}
								label="Default No"
								placeholder="No"
								value={date.valueNo}
								className={classes.text}
								onChange={handleChange}
							/>
						</form>
					</React.Fragment>
				))}
			</>
		</Modal>
	);
};

EditDates.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default EditDates;
