import { queryOptions } from '@tanstack/react-query';
import type { TrendingTimeWindow } from '../model/movie';
import { getNowPlayingMovies } from './get-now-playing-movies';
import { getTrendingMovies } from './get-trending-movies';

const FIRST_PAGE = 1;
const MOVIE_LIST_STALE_TIME_MS = 10 * 60 * 1000;

export const movieKeys = {
	all: ['movies'],
	nowPlaying: (page: number) => ['movies', 'now-playing', page],
	trending: (timeWindow: TrendingTimeWindow) => [
		'movies',
		'trending',
		timeWindow,
	],
};

export function nowPlayingMoviesQuery(page = FIRST_PAGE) {
	return queryOptions({
		queryKey: movieKeys.nowPlaying(page),
		queryFn: ({ signal }) => getNowPlayingMovies(page, signal),
		staleTime: MOVIE_LIST_STALE_TIME_MS,
	});
}

export function trendingMoviesQuery(timeWindow: TrendingTimeWindow = 'day') {
	return queryOptions({
		queryKey: movieKeys.trending(timeWindow),
		queryFn: ({ signal }) => getTrendingMovies(timeWindow, signal),
		staleTime: MOVIE_LIST_STALE_TIME_MS,
	});
}
