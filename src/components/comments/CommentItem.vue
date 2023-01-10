<template>
    <div class="comment">
        <a class="avatar">
            <img :src="'/images/' + comment.author.avatar">
        </a>
        <div class="content">
            <a class="author">{{ comment.author.name }}</a>
            <div class="metadata">
                <span class="date">{{ comment.date }}</span>
            </div>
            <div class="text">
                {{ comment.content }}
            </div>
            <div class="actions">
                <a href="#" class="reply">Редактировать</a>
                <a href="#" class="reply">Удалить</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: Object
    }
}
</script>

<style>

</style>