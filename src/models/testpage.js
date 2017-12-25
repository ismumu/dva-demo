

import { getData } from '../services/testpage';


export default {
	namespace: 'testpage',
	state: {
		text: 'aaaaaa',
		algin: '',
	},

	subscriptions: {
		// setup({ dispatch, history }) {},
	},

	effects: {

		* getData(action, { call, put }) {

			const data = yield call(getDataApi);
			console.log(data);
		}

	},

	reducers: {
		updateState ( state, action ) {

			return {
				text: 'bbbbbbbb',
				algin: 'center'
			}
		}
	},

};
