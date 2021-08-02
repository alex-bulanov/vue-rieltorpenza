import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Paginate from 'vuejs-paginate';
import VueLoader from './components/vue-loader.vue';
import VueSearchForm from './components/vue-search-form.vue';
import VueSearchFormItems from './components/vue-search-form-items.vue';
import VueObjectItem from './components/object-item/vue-object-item.vue';

import VueObjectCardApart from './components/object-card/vue-object-card-apart.vue';
import VueCategory from './components/category/vue-category.vue';

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
    VueObjectCardApart,
    Paginate,
    VueCategory,
  },
  data: {
    parameters: {},
  },
});
