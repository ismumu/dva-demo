

import { getDataApi, getMockDataApi } from '../../services/demo/getData';



export default {
	namespace: 'getdata',
	state: {
		text: 'aaaaaa',
		algin: '',
		dataSource: [],
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

		},

		* getMockData(action, { call, put }) {

			const data = yield call(getMockDataApi);

			// console.log(data);

		}

	},

	reducers: {

		querySuccess ( state, action ) {

			// 给返回的数据追加随机key
			action.payload.data.map((obj) => {

				let key = Math.random().toString(36).substr(2);

				obj.key = key;
				obj.address = '西湖区湖底公园' + key + '号';

			})



			return {
				...state,
				dataSource: state.dataSource.concat(action.payload.data),
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
