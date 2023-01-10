<template>
    <div class="ui placeholder segment">
        <div class="ui icon header">
            <i class="search icon"></i>
                {{ message }}
            </div>
        <div class="inline">
            <div @click.prevent="clearArticleSearchQuery" class="ui primary button">Clear Query</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        message: {
            type: String,
            default: "We don't have any results matching your query"
        }
    },
    methods: {
        ...mapActions({
            clearArticleSearchQuery: 'articles/clearArticleSearchQuery'
        })
    }
}
</script>

<style>

</style>