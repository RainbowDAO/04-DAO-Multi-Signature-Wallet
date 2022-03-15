import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import creator from "./modules/creator";
import multiSign from "./modules/multiSign";

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    creator,
    multiSign
  }
})
