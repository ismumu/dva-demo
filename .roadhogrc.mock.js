
export default {
	'/mock/getdata' (req, res) {
		setTimeout(function(){
			res.json(require('./mock/data.js'));
		}, 5000)
    },
};

