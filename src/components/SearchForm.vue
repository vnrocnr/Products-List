<script setup>
  import { defineEmits } from 'vue';

</script>

<template>

      <v-text-field
        v-model="searchFilter"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        
      > </v-text-field>
</template>
