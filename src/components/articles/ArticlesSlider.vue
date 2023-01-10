<template>
    <v-card
        max-width="1000"
        class="mx-auto"
    >
        <v-carousel
            height="400"
            hide-delimiter-background
            show-arrows="hover"
            cycle
        >
            <v-carousel-item
                v-for="slide in slidesArticles"
                :key="slide.id"
                :src="'/images/' + slide.full_image"
                cover
                class="slide"
            >
               <div class="d-flex justify-center aligcenter slide__background">-->
                   <div class="text-h3 slide__description">
                       <router-link :to="'/articles/' + slide.id">{{ slide.shortDesc || createShortDescription(slide.desc)  }}</router-link>
                   </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            slidesArticles: 'articles/slidesArticles'
        })
    },
    methods: {
        ...mapActions({
            loadingArticles: 'articles/loadingArticles'
        }),
        createShortDescription(description) {
            return description.match(/^([\S]+)(\s[\S]+){10}/)[0] + '...';
        }
    },
    mounted() {
        this.loadingArticles();
    }
}
</script>

<style>

</style>