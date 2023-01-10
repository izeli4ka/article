<template>
  <section class="ui container articles">
        <div v-if="filteredArticles.length" class="articles__list">
            <transition-group name="list">
                <ArticleItem v-for="article in filteredArticles" :key="article.id" :article="article" />  
            </transition-group>  
        </div>
        <AppLoader v-else-if="isLoading">Loading articles..</AppLoader>
        <AppSegment message="We don't have any articles matching your query" v-else />
    </section>
</template>

<script>
import ArticleItem from '@/components/articles/ArticleItem.vue';
import AppLoader from '@/components/AppLoader.vue';
import AppSegment from '@/components/AppSegment.vue';

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        ArticleItem, AppLoader, AppSegment
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            articleSearchQuery: state => state.articles.articleSearchQuery,
            isLoading: state => state.articles.isLoading,
            articles: state => state.articles.articles
        }),
        ...mapGetters({
            filteredArticles: 'articles/filteredArticles'
        })
    },
    methods: {
        ...mapActions({
            loadingArticles: 'articles/loadingArticles'
        })
    },
    mounted() {
        document.title = 'Список новостей';
        this.loadingArticles();
    }
}
</script>

<style>

</style>