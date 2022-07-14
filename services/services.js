import axios from "axios";

//Get Popular Movies
export const getPopularMovies = async () => {
  const APIurl = "https://api.themoviedb.org/3/";
  const APIkey = "api_key=da2285ac0fa6b3d48c769beec4e32cb4";
  return await axios.get(`${APIurl}movie/popular?${APIkey}`);
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const APIurl = "https://api.themoviedb.org/3/";
  const APIkey = "api_key=da2285ac0fa6b3d48c769beec4e32cb4";
  return await axios.get(`${APIurl}movie/upcoming?${APIkey}`);
};

//Get Popular TV
export const getPopularTv = async () => {
  const APIurl = "https://api.themoviedb.org/3/";
  const APIkey = "api_key=da2285ac0fa6b3d48c769beec4e32cb4";
  return await axios.get(`${APIurl}tv/popular?${APIkey}`);
};

//Get Family Movies
export const getFamilyMovies = async () => {
  const APIurl = "https://api.themoviedb.org/3/";
  const APIkey = "api_key=da2285ac0fa6b3d48c769beec4e32cb4";
  return await axios.get(`${APIurl}discover/movie?${APIkey}&with_genres=10751`);
};

//Get Documentaries
export const getDocumentaryMovies = async () => {
  const APIurl = "https://api.themoviedb.org/3/";
  const APIkey = "api_key=da2285ac0fa6b3d48c769beec4e32cb4";
  return await axios.get(`${APIurl}discover/movie?${APIkey}&with_genres=99`);
};
