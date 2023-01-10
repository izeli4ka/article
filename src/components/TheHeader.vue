<template>
  <header class="header">
        <div class="ui inverted menu">
            <div class="ui container">
                <nav class="header__nav">
                    <ul class="header__menu text-white">
                        <li class="menu__item"><router-link to="/" class="header item">Главная</router-link></li>
                        <li class="menu__item"><router-link to="/articles" class="item">Новости</router-link></li>
                    </ul>
                    <v-responsive v-if="$route.name == 'articles'" max-width="450">
                        <v-text-field
                            :model-value="articleSearchQuery"
                            @update:model-value="setArticleSearchQuery"
                            label="Enter the name or description of the article"
                            append-inner-icon="mdi-magnify"
                            density="compact"
                            variant="solo"
                            hide-details
                            single-line
                        ></v-text-field>
                    </v-responsive>
                </nav>
            </div>
        </div>
        <TheToggleTheme />
    </header>
</template>

<script>
import TheToggleTheme from '@/components/TheToggleTheme.vue';
import { mapMutations, mapState } from 'vuex';

export default {
    components: {
        TheToggleTheme
    },
    computed: {
        ...mapState({
            articleSearchQuery: 'articles/articleSearchQuery'
        })
    },
    methods: {
        ...mapMutations({
            setArticleSearchQuery: 'articles/setArticleSearchQuery'
        })
    }
}
</script>

<style>

</style>