import state from './state';
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default counterStore