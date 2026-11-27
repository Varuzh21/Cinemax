import { create } from 'axios';

export const api = create({
	baseURL: 'https://api.themoviedb.org/3/',
	withCredentials: false,
	headers: {
		"Content-Type": "application/json",
	},
});
