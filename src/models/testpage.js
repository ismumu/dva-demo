
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
		// updateState ({})
		// *fetch({ payload }, { call, put }) {
		// 	yield put({ type: 'save' });
		// },
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
