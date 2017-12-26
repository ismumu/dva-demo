


import { delay } from 'roadhog-api-doc';

export default {
	'/mock/getdata' (req, res) {
		res.json(require('./mock/data.js'));
    },
};

