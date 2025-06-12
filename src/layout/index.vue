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

        <v-list density="compact">
          <v-list-item
            prepend-icon="mdi-cart-outline"
            title="Cart"
          ></v-list-item>
        </v-list>
        <v-list-item to="/products" exact selected   >
            <v-btn prepend-icon="mdi-store-edit-outline" block>Products</v-btn>
        </v-list-item>
  
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <h1>Products List</h1>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import user from "@/assets/icons/user.svg";
</script>
