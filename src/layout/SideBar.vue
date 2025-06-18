<template>
 <v-navigation-drawer right class="bg-orange-darken-2">
      <h1 class="text-white font-weight-bold text-center">NEEMBLY</h1>
      <v-list
        class="position-relative d-flex flex-column align-start"
        height="900"
        width="500
      w\s00"
      >
        <v-list-item title="Venar Ocenar" subtitle="venarocenar73@gmail.com">
          <template #prepend>
            <v-icon height="50" width="50"> mdi-account-tie </v-icon>
          </template>
        </v-list-item>

        <v-divider></v-divider>
          <template   v-for="route in routes" :key="route.name">
    <v-list-item
        
         
          :to="route.to"
          class="d-flex text-left align-center ml-20"
          width="500"
        >
          <v-icon height="30">
            {{ route.icon }}
          </v-icon>

          {{ route.name }}

     
  
        </v-list-item>


          <v-divider v-if="route.name === 'logout'">

          </v-divider>

          </template>
    


      </v-list>
    </v-navigation-drawer>
  
</template>

<script setup>
const routes = [
  {
    name: "Home",
    to: "/",
    icon: "mdi-home",
  },
  {
    name: "Products",
    to: "/products",
    icon: "mdi-store-edit",
  },

  {
    name: "Logout",
    to: "/login",
    icon: "mdi-logout",
  },

];
</script>