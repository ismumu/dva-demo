import request from '../utils/request';

export function getDataApi() {
	return request('/mock/getdata', {
		// method: 'get',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			// 'Content-Type': 'application/json'
		}
	});
}
