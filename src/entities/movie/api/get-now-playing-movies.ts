import { api } from '@/shared/api';
import { type MoviePage, moviePageSchema } from '../model/movie';

export async function getNowPlayingMovies(
	page: number,
	signal: AbortSignal,
): Promise<MoviePage> {
	const response = await api.get<unknown>('movie/now_playing', {
		params: { page },
		signal,
	});

	return moviePageSchema.parse(response.data);
}
