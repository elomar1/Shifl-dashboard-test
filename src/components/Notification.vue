<template>
  <v-container>
    <v-row justify="end align-center" style="padding-right:24px">
      <v-badge :content="messages" :value="messages" color="green" overlap>
        <img src="@/assets/images/notification-icon.svg" alt="">
      </v-badge>
      <v-avatar size="40" style="margin-left:33px">
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {
      messages: 0,
      show: false,
    };
  },
};
</script>
