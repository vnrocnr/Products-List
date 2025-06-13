<template>
  <!-- <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.id"
          :cols="product.flex"
          sm="6"
          md="4"
          lg="3"
          >
          <v-card
            class="mx-auto flex justify-center items-center "
            max-width="344"
          >
            <div class="d-flex justify-center">
              <v-img
                height="200px"
                width="200"
                :src="`${product.image}`"
                cover
              ></v-img>
            </div>

            <v-card-title>
              {{ product.title }}
            </v-card-title>

            <div class="max-w-200px" >
                  <v-card-subtitle style="max-width: 300px;">
              {{ product.description }}
            </v-card-subtitle>
            </div>
          
            
            
            <v-card-text max-width="300">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          {{product.rating.rate}} ({{ product.rating.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        ${{ product.price }}
      </div>

   

    </v-card-text>

    <v-divider></v-divider>

           


            <v-card-actions class="bg-pink-lighten-3">
              <v-spacer></v-spacer>

              <v-btn
                color="medium-emphasis"
                icon="mdi-heart"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-bookmark"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-share-variant"
                size="small"
              ></v-btn>
            </v-card-actions>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </v-card> -->
  <v-card class="d-flex flex-column gap-10 bg-indigo-lighten-3">
    <v-sheet
      height="80"
      variant="elevated"
      class="d-flex justify-left pl-3 align-center position-relative rounded-b-full"
      width="auto"
    >
      <v-text-field
        v-model="searchFilter"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        hide-details
        single-line
        color="primary"
        style="max-width: 450px"
        density="comfortable"
      ></v-text-field>

      <!-- Start of Add Product Container -->
      <div class="text-center pa-4">
        <v-btn
          @click="dialog = true"
          prepend-icon="mdi-plus"
          class="bg-purple-darken-1 position-absolute right-0"
          >Add Product</v-btn
        >
        <v-dialog v-model="dialog" width="600">
          <v-card
            max-width="auto"
            prepend-icon="mdi-update"
            text="Please be guided accordingly"
            title="Add new Product Here"
          >
            <AddProductForm 
              @closeDialog="dialog=false"
              :addNewProduct="addProduct"
              />
          </v-card>
        </v-dialog>
      </div>
      <!-- End of Add Product Container -->
    </v-sheet>
    <v-table height="650px" width="700px" class="d-flex" fixed-header>
      <thead>
        <tr class="text-uppercase">
          <th
            class="text-left"
            scope="col"
            v-for="(p, index) in header"
            :key="index"
          >
            {{ p }}

            <div class="btns d-flex flex-row">
              <v-btn density="compact" icon="menu-up-outline">▲</v-btn>
              <v-btn density="compact" icon="">▼</v-btn>
            </div>
          </th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td class="max-w-100">{{ product.description }}</td>
          <td>{{ product.category }}</td>
          <td>
            <img
              :src="`${product.image}`"
              alt=""
              style="height: 100px; width: 100px"
            />
          </td>
          <td>
            <v-rating
              :model-value="product.rating?.rate ?? 0"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
              height="20"
            ></v-rating>
            {{ product.rating?.rate ?? "N/A" }}
            ({{ product.rating?.count ?? "0" }})
          </td>
          <td>
            <!-- Start of Update Product Container -->

            <v-card class="d-flex ga-2" height="35" width="60" variant="flat">
              <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    height="25"
                    width="25"
                    icon="mdi-pencil"
                    size="x-small"
                    class="bg-purple-darken-1"
                    v-bind="activatorProps"
                  >
                  </v-btn>
                </template>

                <UpdateForm
                  v-model:dialogVisible="dialog"
                  :productData="product"
                  :onUpdate="updateProduct"
                />
              </v-dialog>
              <v-btn
                height="25"
                width="25"
                icon="mdi-trash-can-outline"
                size="x-small"
                class="bg-purple-lighten-5"
              >
              </v-btn>
            </v-card>

            <!-- End of Add Product Container -->
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useProductsStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import UpdateForm from "./UpdateForm.vue";
import AddProductForm from "./AddProductForm.vue";

// const { products, e, loading } = storeToRefs(useProductsStore());
const {  header, filteredProducts, searchFilter } =
  storeToRefs(useProductsStore());
const { fetchProducts, fetchProduct, updateProduct, addProduct } = useProductsStore();

fetchProducts();



const dialog = ref(false);
onMounted(() => {
  // console.log(filteredProducts);

});
</script>
