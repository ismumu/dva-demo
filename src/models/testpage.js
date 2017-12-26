

import { getDataApi } from '../services/testpage';



export default {
	namespace: 'testpage',
	state: {
		text: 'aaaaaa',
		algin: '',
		dataSource: [],
		showLoading: false,
	},

	subscriptions: {
		// setup({ dispatch, history }) {},
	},

	effects: {

		* getData(action, { call, put }) {

			const data = yield call(getDataApi);

			yield put({
				type: 'querySuccess',
				payload: data,
			})

		}

	},

	reducers: {

		querySuccess ( state, action ) {
			return {
				...state,
				dataSource: action.payload.data.list,
				showLoading: false,
			}
		},

		updateState ( state, action ) {
			return {
				...state,
				...action.payload,
			}
		}


	},

};
