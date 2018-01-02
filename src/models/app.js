
export default {
	namespace: 'dvaDemoApp',

	state: {
		collapsed: false,
		pathname: '/',
	},

	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((locaion) => {
				dispatch({
					type: 'updateState',
					payload: {
						pathname: locaion.pathname,
					}
				})
			})
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
