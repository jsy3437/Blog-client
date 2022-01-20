import axios from 'axios';

const instance = axios.create({
	proxy: 'http://localhost:8080',
	baseURL: '/user',
	withCredentials: true,
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

const config = { headers: { 'content-type': 'multipart/form-data' } };

export const auth = async () => {
	return await instance.get('/me').catch({ data: { success: false } });
};

export const register = async (userData) => {
	return await instance.post('/signup', userData).catch(errorMessage);
};

export const login = async (userData) => {
	return await instance.post('/login', userData).catch(errorMessage);
};

export const getProfile = async (username) => {
	return await instance
		.get(`/profile/?username=${username}`)
		.catch(errorMessage);
};

export const update = async (userData) => {
	return await instance.patch('/update', userData).catch(errorMessage);
};

export const secession = async (username) => {
	return await instance.delete(`secession/?username=${username}`);
};

export const nickCheck = async (nickname) => {
	return await instance
		.get(`nickCheck/?nickname=${nickname}`)
		.catch(errorMessage);
};

export const nameCheck = async (username) => {
	return await instance
		.get(`userCheck/?username=${username}`)
		.catch(errorMessage);
};
