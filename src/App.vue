<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <DrawerMenu />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> 
        <div class="forFelx">
          <SearchGetHelp /> <Notification /> 
        </div>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
       <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
  import DrawerMenu from "./components/DrawerMenu.vue";
  import SearchGetHelp from "./components/SearchGetHelp.vue";
  import Notification from "./components/Notification.vue";
  export default {
  components: {
    DrawerMenu,SearchGetHelp,Notification
  },
    data: () => ({ drawer: null }),
    
  }
</script>

<style scoped>
.v-toolbar__title {
      width: 100%;
    padding-left: 0px !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet{
    background: #fff
}
.forFelx{
      display: flex;
    align-items: center;
}
.v-toolbar {
    box-shadow: unset !important;
}
</style>