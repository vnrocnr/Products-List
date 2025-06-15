<template>
  <v-app>
    <v-app-bar title="VShop">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer right class="bg-white">
      <v-list>
        <v-list-item
          :prepend-avatar="user"
          title="Venar Ocenar"
          subtitle="venarocenar73@gmail.com"
        ></v-list-item>

        <v-divider></v-divider>

          <v-list-item
            v-for="route in routes"
            :key="route.name"
            :to="route.to"
          >

          <v-btn   :prepend-icon="`${ route.icon }`" block>
    {{ route.name }}

          </v-btn>
          
          </v-list-item>

       
  
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
      
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import user from "@/assets/icons/user.svg";

const routes = [
  {
    name:'Home', to:'/', icon:'mdi-home'
  },
  {
    name:'Products', to:'/products', icon:'mdi-store-edit'
  },
]
</script>
