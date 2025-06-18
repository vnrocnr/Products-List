<template>
  <div
    class="bg-orange-darken-3 h-100 w-100 overflow-none d-flex flex-column justify-center align-center"
  >
    <v-card class="pa-12 pb-8" elevation="8" width="450" rounded="lg">
      
      <v-img height="80" width="80" :src="neembly" class="d-flex align-center w-100">

        </v-img>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="btns d-flex flex-column ga-5 align-center">
        <v-btn
          color="orange"
          size="large"
          variant="tonal"
          block
          @click="handleLogin()"
        >
          Log In
        </v-btn>

        <v-divider></v-divider>
        <p class="text-subtitle-2">Doesn't have an account yet?</p>

        <router-link
          to="/signUp"
          class="text-decoration-none text-purple-darken-4"
        >
          Sign In <v-icon icon="mdi-chevron-right"> </v-icon>
        </router-link>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import neembly from '../assets/icons/neembly-logo.png'

const visible = ref(false);

const router = useRouter();
const handleLogin = () => {
  router.replace("/dashboard");
};
</script>
