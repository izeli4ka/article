<template>
    <div class="ui text container">
        <template v-if="!isUpdating">
            <h1 class="ui header">{{ article.name }}
                <div class="ui label">{{ article.date }}</div>
            </h1>
            <div class="ui divider"></div>
            <div class="article-body">
                <img align="left" class="article-preview" :src="fullImage">
                <p class="article-content">{{ article.desc }}</p>
            </div>
        </template>
        <AppLoader v-else>Loading article..</AppLoader>
        <div class="ui comments mb-4">
            <h3 class="ui dividing header">Комментарии</h3>
                <template v-if="comments.length">
                    <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
                </template>
                <template v-else>Оставьте первый комментарий..</template>
            <form action="/articles/<?=$article->getID()?>/comment" method="post" class="ui reply form">
                <div class="field">
                    <textarea minlength="3" maxlength="256" name="content"></textarea>
                </div>
                <button class="ui blue submit button">
                    Добавить комментарий
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue';
import CommentItem from '@/components/comments/CommentItem.vue';

import { mapActions } from 'vuex';

export default {
    components: {
        AppLoader, CommentItem
    },
    data() {
        return {
            article: {},
            isUpdating: true,
            comments: [
                {
                    id: 1,
                    content: 'Прикольная статья!',
                    date: '02.09.2021',
                    author: {
                        name: 'Andrej',
                        avatar: 'joe.jpg'
                    }
                }
            ]
        }
    },
    methods: {
        ...mapActions({
            loadingArticle: 'articles/loadingArticle'
        }),
        async updateArticle() {
            this.isUpdating = true;

            this.article = {};

            setTimeout(async () => {
                this.article = await this.loadingArticle(this.$route.params.id);
                this.isUpdating = false;
            }, 500)
        }
    },
    computed: {
        fullImage() {
            return '/images/' + this.article.full_image;
        }
    },
    mounted() {
        document.title = this.article.name || 'Загрузка..'
        this.updateArticle();
    }
}
</script>

<style>

</style>