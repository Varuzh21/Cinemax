import { api } from '@/shared/api';
import {
	type MoviePage,
	moviePageSchema,
	type TrendingTimeWindow,
} from '../model/movie';

export async function getTrendingMovies(
	timeWindow: TrendingTimeWindow,
	signal: AbortSignal,
): Promise<MoviePage> {
	const response = await api.get<unknown>(`trending/movie/${timeWindow}`, {
		signal,
	});

	return moviePageSchema.parse(response.data);
}
