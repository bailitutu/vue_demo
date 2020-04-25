
import { storeConfig } from "./module/root";
import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({ ...storeConfig });
