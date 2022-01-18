import axios from 'axios';

const instance = axios.create({
	proxy: 'http://localhost:8080',
	baseURL: '/blog',
	withCredentials: true,
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const getAllList = async () => {
	return await instance.get('/').catch(errorMessage);
};
export const getListByUser = async (username) => {
	return await instance.get(`/?username=${username}`).catch(errorMessage);
};
export const create = async (postData) => {
	return await instance.post('/', postData).catch(errorMessage);
};
export const update = async (id, postData) => {
	return await instance.put(`/?id=${id}`, postData).catch(errorMessage);
};
export const remove = async (id) => {
	return await instance.delete(`/?id=${id}`).catch(errorMessage);
};
