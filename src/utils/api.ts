import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});
