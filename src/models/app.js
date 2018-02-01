
export default {
	namespace: 'dvaDemoApp',

	state: {
		collapsed: false,
		progressWidth: 0,
		routers: [],
	},

	subscriptions: {
		setup({ dispatch, history }) {

			history.listen(function (location) {
				dispatch({
					type: 'updateStateRouters',
					payload: {
						path: location.pathname,
					}
				})
			})

		},
	},

	effects: {

	},

	reducers: {

		updateStateRouters (state, action) {

			state.routers.push(action.payload.path);

			return state
		},

		updateState (state, action) {
			return {
				...state,
				...action.payload,
			}
		}

	},

};
