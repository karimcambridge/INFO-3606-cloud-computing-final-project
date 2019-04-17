
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

new Vuex.Store({ // eslint-disable-line no-new
    state: {
        userlogged: ''
    },
    mutations: {
        saveUserLogged(state, loggedUser) {
            state.userLogged = loggedUser
        }
    },
    actions: { // this.$store.dispatch('saveUserLogged', this.username);
        saveUserLogged(context, loggedUser) {
            context.commit('saveUserLogged', loggedUser)
        }
    },
    plugins: [createPersistedState()]
})
