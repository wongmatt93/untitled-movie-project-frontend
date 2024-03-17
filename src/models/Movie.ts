interface Person {
  adult: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface MovieCredits {
  cast: Person[];
  crew: Person[];
}

interface Genre {
  id: number;
  name: string;
}

export interface MovieSummary {
  id: string;
  genres: Genre[];
  poster_path: string;
  release_date: string;
  title: string;
}

export default interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  genres: Genre[];
  poster_path: string;
  backdrop_path: string;
  runtime: number;
  credits: MovieCredits;
}
