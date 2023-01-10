<template>
    <v-btn
        icon="mdi-opacity"
        color="amber accent-2"
        @click.prevent="toggleTheme"
    ></v-btn>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>

<style scoped>
    .v-btn {
        position: fixed;
        right: 2rem;
    }
</style>