
export default {
	namespace: 'app',

	state: {
		collapsed: false,
	},

	subscriptions: {
		setup({ dispatch, history }) {
			// console.log(history)
			// history.listen((locaion) => {
				// console.log(locaion.pathname);
			// })
		},
	},

	effects: {

	},

	reducers: {

		updateState (state, action) {
			return {
				...state,
				...action.payload,
			}
		}

	},

};
