<template>

     <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                variant="elevated"
                color="blue-darken-3"
                @click="fetchProduct(id)"
                icon="mdi-eye"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">

                
              <v-card :title="`${product.title}`">
                <div class="rating">
                  <v-rating
                    :model-value="`${product.rating.rate}`"
                    color="amber"
                    density="compact"
                    size="small"
                    half-increments
                    readonly
                  ></v-rating>
                  {{ product.rating.rate }}
                </div>
                <v-card-text>
                  {{ product.description }}
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text="Close Dialog"
                    @click="isActive.value = false"
                  ></v-btn>

                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>

</template>

<script setup>
</script>