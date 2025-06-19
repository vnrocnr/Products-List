<template>
  <div class="">
    <v-card
      title=""
      variant="flat"
      class="h-100 d-flex flex-column ga-2 pa-3 align-center justify-center"
      height="650"
    >
      <v-img
        :src="error"
        :lazy-src="error"
        height="750"
        class="d-flex position-relative w-100"
      >
        <p
          class="text-orange-darken-3 text-h1 position-absolute font-weight-bold"
          style="top: 290px; left: 90px"
        >
          OOPS...
        </p>
        <p
          class="text-black text-h4 position-absolute"
          style="top: 405px; left: 90px"
        >
          PAGE NOT FOUND
        </p>
      </v-img>
    </v-card>
  </div>
</template>

<script setup>
import error from "@/assets/icons/404-error.svg";
</script>
