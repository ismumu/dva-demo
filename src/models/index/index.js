


export default {
	namespace: 'modelsIndex',

	state: {
		collapsed: false,
	},

	subscriptions: {
		// setup({ dispatch, history }) {},
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
