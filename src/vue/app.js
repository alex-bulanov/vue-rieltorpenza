import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import VueLoader from './components/vue-loader.vue';
import VueSearchForm from './components/vue-search-form.vue';
import VueSearchFormItems from './components/vue-search-form-items.vue';
import VueObjectItem from './components/object-item/vue-object-item.vue';

window.Vue = Vue;

Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#vue-app',
  components: {
    VueLoader,
    VueSearchForm,
    VueSearchFormItems,
    VueObjectItem,
  },
  data: {
    parameters: {},
  },
});
