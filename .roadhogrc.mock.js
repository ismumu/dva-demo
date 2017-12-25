
export default {
	'/api/getdata' (req, res) {
        res.json(require('./mock/data.js'));
    },
};
