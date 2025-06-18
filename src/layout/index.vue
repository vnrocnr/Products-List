<template>
  <v-app>
    
   <SideBar/>
   <!-- NavBar -->
   <NavBar/>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// import user from "@/assets/icons/user.svg";
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';

</script>
