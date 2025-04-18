import axios, { AxiosResponse } from 'axios';
import Constants from 'expo-constants';

const API = axios.create({
	baseURL: Constants.expoConfig?.extra?.apiHost
});

API.defaults.timeout = 5000;

const debug = (res: AxiosResponse, params: any = {}) => {
	const baseURL = API.defaults.baseURL;
	const requestPath = res.config.url;
	const requestParams = new URLSearchParams({ ...params }).toString();
	const fullRequestURL = `${baseURL}${requestPath}?${requestParams}`;
	console.log('Full Request URL:', fullRequestURL);
};

export const fetchPokemons = async (params: any) => {
	const res = await API.get('/pokemon', { params });
	debug(res, params);
	return res;
};

export const fetchPokemonById = async (id: number) => {
	const res = await API.get(`/pokemon/${id}`);
	debug(res);
	return res;
};

export default API;