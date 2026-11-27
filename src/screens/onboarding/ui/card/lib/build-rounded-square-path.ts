export function buildRoundedSquarePath(
	inset: number,
	side: number,
	radius: number,
) {
	const start = inset;
	const end = inset + side;
	const center = inset + side / 2;

	return [
		`M ${center} ${start}`,
		`H ${end - radius}`,
		`A ${radius} ${radius} 0 0 1 ${end} ${start + radius}`,
		`V ${end - radius}`,
		`A ${radius} ${radius} 0 0 1 ${end - radius} ${end}`,
		`H ${start + radius}`,
		`A ${radius} ${radius} 0 0 1 ${start} ${end - radius}`,
		`V ${start + radius}`,
		`A ${radius} ${radius} 0 0 1 ${start + radius} ${start}`,
		`H ${center}`,
	].join(' ');
}
