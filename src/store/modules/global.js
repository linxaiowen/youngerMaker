const global = {
    state: {
        isCollapse: false
    },

    mutations: {
        SET_IS_COLLAPSE: (state, collapse) => {
            state.isCollapse = collapse;
        }
    },

    actions: {
        updateCollapse({ commit }, collapse) {
            commit('SET_IS_COLLAPSE', collapse);
        }
    }
};

export default global;
