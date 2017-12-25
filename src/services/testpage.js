import request from '../utils/request';

export function getDataApi() {
	return request('/api/users');
}
