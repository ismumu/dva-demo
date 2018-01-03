

import { getDataApi } from '../../services/demo/getData';



export default {
	namespace: 'getdata',
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

			// 给返回的数据追加随机key
			action.payload.data.list.map((obj) => {

				let key = Math.random().toString().substr(2);

				obj.key = key;
				obj.address = '西湖区湖底公园' + key + '号';

			})

			return {
				...state,
				dataSource: state.dataSource.concat(action.payload.data.list),
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
