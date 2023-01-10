<template>
    <v-card
        tonal
        class="article-item"
        max-width="344"
    >
        <div class="article-item__preview">
            <img :src="previewImage" class="article-item__image">
        </div>
        <v-card-title>
            <router-link :to="'/articles/' + article.id">{{ article.name }}</router-link>
        </v-card-title>
        <v-card-subtitle>{{ shortDescription }}</v-card-subtitle>
        <v-card-actions>
            <v-btn color="red-lighten-2" variant="text">
                <router-link :to="'/articles/' + article.id">Learn more</router-link>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        article: Object
    },
    computed: {
        previewImage() {
            return '/images/' + this.article.preview_image;
        },
        shortDescription() {
            return (this.article.shortDesc || this.article.desc.match(/^([\S]+)(\s[\S]+){10}/)[0]) + '...';
        }
    }
}
</script>

<style>

</style>