const getCurrentDate = () => {
	const d = new Date();

	return {
		day: d.getDate(),
		month: d.getMonth() + 1,
	};
};

export default getCurrentDate;
