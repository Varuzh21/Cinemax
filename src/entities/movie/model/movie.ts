import { z } from 'zod';

// Only `id` and `title` are strict: one incomplete movie must not fail the
// whole page, and TMDB's docs do not say which fields can be empty.
export const movieSchema = z
	.object({
		id: z.number(),
		title: z.string(),
		overview: z.string().nullish(),
		poster_path: z.string().nullish(),
		backdrop_path: z.string().nullish(),
		release_date: z.string().nullish(),
		genre_ids: z.array(z.number()).nullish(),
		vote_average: z.number().nullish(),
		vote_count: z.number().nullish(),
	})
	.transform(movie => ({
		id: movie.id,
		title: movie.title,
		overview: movie.overview ?? '',
		posterPath: movie.poster_path ?? null,
		backdropPath: movie.backdrop_path ?? null,
		releaseDate: movie.release_date || null,
		genreIds: movie.genre_ids ?? [],
		voteAverage: movie.vote_average ?? 0,
		voteCount: movie.vote_count ?? 0,
	}));

export const moviePageSchema = z
	.object({
		page: z.number(),
		results: z.array(movieSchema),
		total_pages: z.number(),
		total_results: z.number(),
	})
	.transform(moviePage => ({
		page: moviePage.page,
		movies: moviePage.results,
		totalPages: moviePage.total_pages,
		totalResults: moviePage.total_results,
	}));

export type Movie = z.infer<typeof movieSchema>;
export type MoviePage = z.infer<typeof moviePageSchema>;
export type TrendingTimeWindow = 'day' | 'week';
