import axios from "axios";
import UserProfile from "../models/UserProfile";

const baseURL: string | undefined = import.meta.env.VITE_API_URL;

export const getUserProfile = async (
  type: string,
  identifier: string
): Promise<UserProfile> =>
  (
    await axios.get(
      `${baseURL}/userProfiles/search-profile/${type}/${identifier}`
    )
  ).data;

export const addNewUserProfile = async (uid: string): Promise<UserProfile> =>
  (
    await axios.post(`${baseURL}/userProfiles/add-profile`, {
      uid,
    })
  ).data;

export const updateUserProfile = async (
  updatedUserProfile: UserProfile
): Promise<UserProfile> =>
  (
    await axios.put(`${baseURL}/userProfiles/update-profile`, {
      updatedUserProfile,
    })
  ).data;

export const addWatchedMovieToUserProfile = async (
  uid: string,
  id: number,
  preference: string,
  ranking: number
): Promise<UserProfile> =>
  (
    await axios.put(`${baseURL}/userProfiles/add-watched-movie`, {
      uid,
      id,
      preference,
      ranking,
    })
  ).data;

export const removeWatchedMovieFromUserProfile = async (
  uid: string,
  id: number
): Promise<UserProfile> =>
  (
    await axios.put(`${baseURL}/userProfiles/remove-watched-movie`, {
      uid,
      id,
    })
  ).data;

export const addWatchlistMovieToUserProfile = async (
  uid: string,
  id: number
): Promise<UserProfile> =>
  (await axios.put(`${baseURL}/userProfiles/add-watchlist-movie`, { uid, id }))
    .data;

export const removeWatchlistMovieFromUserProfile = async (
  uid: string,
  id: number
): Promise<UserProfile> =>
  (
    await axios.put(`${baseURL}/userProfiles/remove-watchlist-movie`, {
      uid,
      id,
    })
  ).data;
