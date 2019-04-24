export const state = () => ({
    user: null
});

export const mutations = {
    set(state, user) {
        state.user = user;
    },
    reset(state) {
        state.user = null;
    }
};

export const getters = {
    get(state) {
        return state.user;
    }
};
