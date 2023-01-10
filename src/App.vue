<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view/>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader, TheFooter
  },
  data: () => ({

  }),
}
</script>
