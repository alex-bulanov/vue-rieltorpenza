<template>
    <div class="fields" v-if="parameters">
        {{parameters}}
        <div class="fields__main-row">
            <div class="fields__row" v-if="parameters.rooms">
                <div class="field-group">
                    <div class="field-label c1">Кол-во комнат</div>
                    <div class="rooms-switcher">
                        <div class="rooms-switcher__item" v-for="(rooms, index) in parameters.rooms">
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
            <!--
            <div class="field-button">
                <template v-if="isReactive">
                    <div class="button button_primary button_md">Показать {{activeCount}} предложения</div>
                </template>
                <template v-else>
                    <a href="" class="button button_primary button_md">Показать {{activeCount}} предложения</a>
                </template>
            </div>
            -->
        </div>
    </div>
</template>

<script>
  export default {
    name: "vue-search-form-items",
    props: {
      parameters: {
        type: Object,
        required: false,
      }
    }
  }
</script>

<style scoped>

</style>