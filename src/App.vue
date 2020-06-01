<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      scroll-target="content"
      scroll-threshold="500"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content id="content">
      <router-view />
      <div style="height:1000px"></div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    collapseOnScroll: true
  }),
};
</script>
