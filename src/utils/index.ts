export const calculateAge = (birthdate: string) => {
	const timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());

	return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};

export const strCapitalize = (str?: string) =>
	(str && str[0]?.toUpperCase() + str.slice(1)) || '';

export const strUppercase = (str?: string) => str?.toUpperCase() || '';

export const strLowercase = (str?: string) => str?.toLowerCase() || '';
