<template>
    <v-footer
        class="bg-blue-grey pa-0"
    >
        <v-row
            no-gutters
        >    
            <v-col cols="4" class="pa-4">
                <strong class="text-white">Шаев Андрей, группа 211-322</strong>
            </v-col>
            <v-col
                class="text-center text-white pa-2 bg-black"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Московский Политех</strong>
            </v-col>
        </v-row>
    </v-footer>

    <!-- <footer class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
            Шаев Андрей Андреевич, группа 211-322. Московский Политех
        </div>
    </footer> -->
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Главная', link: '/' },
                { name: 'Новости', link: '/articles' }
            ]
        }
    }
}
</script>

<style>

</style>