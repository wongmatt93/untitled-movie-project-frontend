import axios from "axios";
import TmdbResponse from "../models/TmdbResponse";

const api_key: string = import.meta.env.VITE_TMDB_API_KEY || "";

export const getTmdbPopularMovies = async (): Promise<TmdbResponse> =>
  (
    await axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key },
    })
  ).data;

export const getTmdbMoviesByQuery = async (
  query: string
): Promise<TmdbResponse> =>
  (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: { api_key, query },
    })
  ).data;
