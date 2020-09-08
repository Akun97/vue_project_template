const user = {
	
	namespaced: true,
	
  state: {//属性
		test: '???'
	},
	
  mutations: {//更新属性
		updateTest(state) {
			state.test = 'Hello';
    }
	},
	
	actions: {//分发事件
		delay(context) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 2000);
			});
		},
		async textFunc({commit, dispatch}) {
			await dispatch('delay');
			commit('updateTest');
    }
	}
	
}

export default user