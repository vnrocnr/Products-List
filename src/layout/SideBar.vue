<template>
  <v-navigation-drawer right class="bg-orange-darken-2">

    <div class="top">
        <h1 class="text-white font-weight-bold text-center">COMPANY NAME</h1>
    </div>
    
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

        <v-list-item
         v-for="route in routes" :key="route.name"
          :to="route.to"
          class="d-flex text-left align-center ml-20 position-relative"
          width="500"
        >
          <v-icon height="30">
            {{ route.icon }}
          </v-icon>

          {{ route.name }}
        </v-list-item>
  <v-spacer > </v-spacer>
       
  
            <v-list-item 
            v-for="logout in logout"
          :to="logout.to"
          class="d-flex"
          width="500"
        >


          <v-icon height="30">
            {{ logout.icon }}
          </v-icon>
             {{ logout.name }} 
        
        </v-list-item>

      
  
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const routes = [
  {
    name: "Dashboard",
    to: "/",
    icon: "mdi-view-dashboard",
  },
    
  {
    name: "Products",
    to: "/products",
    icon: "mdi-store-edit",
  },

    {
    name: "Settings",
    to: "/settings",
    icon: "mdi-cog",
  },
  {
    name: "Order",
    to: "/order",
    icon: "mdi-cart-outline",
  },
    {
    name: "Help",
    to: "/help",
    icon: "mdi-help-circle-outline",
  },

 
];

const logout = [
   {
    name: "Logout",
    to: "/login",
    icon: "mdi-logout",
  },
]
</script>
