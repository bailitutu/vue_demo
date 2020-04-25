import { routerConfig } from './module/root';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export const router = new Router(routerConfig);
