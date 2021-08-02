/*
  page - дефолтная страница
  pageSize - кол-во карточек на странице
  pageCount - кол-во страниц
  allItems - все объекты карточек приходящие с сервера
  items - объекты карточек, которые необходимо показывать на странице

*/

import _ from 'lodash';

export default {
  data() {
    return {
      page: 1,
      pageSize: 9,
      pageCount: 0,
      allItems: [],
      items: [],
    };
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize);
      this.pageCount = _.size(this.allItems);
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },
  },
};
