<template>

    <form class="search-form">
        <div class="search-form__type">
            <div class="object-type">
                <div class="object-type__item" v-for="(category, index) in categories" :key="index">
                    <input :id="'object-type-' + category.id" class="object-type__input" type="radio" name="object-type" v-model="activeCategoryIndex" :value="index">
                    <label :for="'object-type-' + category.id" class="object-type__label">{{category.name}}</label>
                </div>
            </div>
        </div>
        <div class="search-form__body">

            <template v-for="(category, index) in categories">
                <template v-if="index === activeCategoryIndex">
                    <vue-search-form-items :parameters="category.parameters"></vue-search-form-items>
                </template>
            </template>

            <!--
            <div class="fields">
                <div class="fields__main-row">
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Кол-во комнат</div>
                            <div class="rooms-switcher">
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">Комната</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">Студия</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">1</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">2</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">3</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">4+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Стоимость, ₽</div>
                            <div class="field-group__input-group">
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="от">
                                </div>
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="до">
                                </div>
                            </div>
                        </div>
                        <div class="field-group">
                            <div class="field-label c1">Площадь, м<sup>2</sup></div>
                            <div class="field-group__input-group">
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="от">
                                </div>
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="до">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Район</div>
                            <button class="input">Выбрать</button>
                        </div>
                        <div class="field-group">
                            <div class="field-label c1">Улица</div>
                            <button class="input">Выбрать</button>
                        </div>
                        <div class="field-group">
                            <div class="field-label c1">Жилой комплекс</div>
                            <button class="input">Выбрать</button>
                        </div>
                    </div>
                </div>
                <div class="fields__main-row">
                    <div class="field-group">
                        <input type="text" class="input" placeholder="Введите район, улицу, дом или ЖК">
                    </div>
                    <div class="field-button">
                        <template v-if="isReactive">
                            <div class="button button_primary button_md">Показать {{activeCount}} предложения</div>
                        </template>
                        <template v-else>
                            <a href="" class="button button_primary button_md">Показать {{activeCount}} предложения</a>
                        </template>
                    </div>
                </div>
            </div>

            <div class="fields">
                <div class="fields__main-row">
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Кол-во комнат</div>
                            <div class="rooms-switcher">
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">Комната</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">Студия</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">1</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">2</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">3</button>
                                </div>
                                <div class="rooms-switcher__item">
                                    <button type="button" class="button button_neutral button_md">4+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Стоимость, ₽</div>
                            <div class="field-group__input-group">
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="от">
                                </div>
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="до">
                                </div>
                            </div>
                        </div>
                        <div class="field-group">
                            <div class="field-label c1">Площадь, м<sup>2</sup></div>
                            <div class="field-group__input-group">
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="от">
                                </div>
                                <div class="field-group__input">
                                    <input type="text" class="input" placeholder="до">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fields__row">
                        <div class="field-group">
                            <div class="field-label c1">Район</div>
                            <button class="input">Выбрать</button>
                        </div>
                        <div class="field-group">
                            <div class="field-label c1">Жилой комплекс</div>
                            <button class="input">Выбрать</button>
                        </div>
                    </div>
                </div>
                <div class="fields__main-row">
                    <div class="field-group">
                        <input type="text" class="input" placeholder="Введите район, улицу, дом или ЖК">
                    </div>
                    <div class="field-button">
                        <template v-if="isReactive">
                            <div class="button button_primary button_md">Показать {{activeCount}} предложения</div>
                        </template>
                        <template v-else>
                            <a href="" class="button button_primary button_md">Показать {{activeCount}} предложения</a>
                        </template>
                    </div>
                </div>
            </div>
            -->
        </div>
        <div class="search-form__tags">
            <div class="tag-list">
                <div class="tag-list__item">
                    <div class="tag c2">
                        <span>1 к</span>
                        <svg class="icon"><use xlink:href="#icon-x"></use></svg>
                    </div>
                </div>
                <div class="tag-list__item">
                    <div class="tag c2">
                        <span>Квартиры</span>
                        <svg class="icon"><use xlink:href="#icon-x"></use></svg>
                    </div>
                </div>
                <div class="tag-list__item">
                    <div class="tag tag_clear c2">
                        <span>Очистить все</span>
                        <svg class="icon"><use xlink:href="#icon-x"></use></svg>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

  import VueSearchFormItems from './vue-search-form-items.vue';

  export default {
    name: 'vue-search-form',
    components: {
      VueSearchFormItems,
    },
    props: {
      categories: {
        type: Array,
        required: true,
      },
      isReactive: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        activeCategoryIndex: 0,
      }
    },
    computed: {
      activeCount() {
        return this.categories[this.activeCategoryIndex].count
      },
      activeCategoryId() {
        return this.categories[this.activeCategoryIndex].id
      }
    },
    mounted() {

    }
  };
</script>

<style>

</style>