import axios from "axios";
import Movie from "../models/Movie";

const baseURL: string | undefined = import.meta.env.VITE_API_URL;

export const getMovieById = async (id: number): Promise<Movie> =>
  (await axios.get(`${baseURL}/movies/search/${id}`)).data;

export const getPopularMovies = async (): Promise<Movie[]> =>
  (await axios.get(`${baseURL}/movies/get-popular-movies`)).data;

export const getMoviesbyQuery = async (query: string): Promise<Movie[]> =>
  (await axios.get(`${baseURL}/movies/get-movies-by-query/${query}`)).data;
