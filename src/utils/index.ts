export const calculateAge = (birthdate: string) => {
	const timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());

	return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};
