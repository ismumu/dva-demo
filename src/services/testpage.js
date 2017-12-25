import request from '../utils/request';

export function getDataApi() {
	return request('../db/data.json', {});
}
