<template>
  <div class="container d-flex">

     <v-container  >
    <v-row no-gutters
   class="ga-2 "

    >
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="5"
        md="4"
        lg="3"
      variant="tonal"
      style="max-width: 350px;"

      >
        <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="product.image"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="`${product.rating?.rate}`"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          {{ product.rating?.rate }} ({{ product.rating?.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        ${{ product.price }} • Italian, Cafe
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

      </v-col>
    </v-row>
  </v-container>

  </div>
  
</template>

<script setup>
 import { useProductsStore } from '@/stores/products'
import { ref,  onMounted } from 'vue'
import {storeToRefs } from 'pinia'
 const {products} = storeToRefs(useProductsStore()) 

  const loading = ref(false)
  const selection = ref(1)
  function reserve () {
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
  }

  onMounted(() => {
    console.log(products)
  })
</script>