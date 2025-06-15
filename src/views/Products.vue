<template>
  
  <v-card class="d-flex flex-column gap-10 bg-indigo-lighten-3">
    <v-sheet
      height="80"
      variant="elevated"
      class="d-flex ga-3 justify-left pl-3 align-center position-relative rounded-b-full"
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

      <div class="idFilteredContainer d-flex flex-row justify-center align-center">
         <v-text-field
          v-model="idFilter"
        label="ID"
        rounded="0"
        variant="outlined"
        hide-details
        single-line
        color="primary"
        style="max-width: 90px"
        density="comfortable"
      ></v-text-field>

        
      <v-sheet height="48" rounded="0" color="success" variant="flat" @click="fetchProduct" class="d-flex justify-center align-center text-uppercase px-2">
        <p class="font-weight-bold">search by id </p> 
      </v-sheet>
      </div>
     

      <!-- Start of Add Product Container -->
      <div class="text-center pa-4">
        <v-btn
          @click="dialog = true"
          class="bg-purple-darken-1 position-absolute right-0"
          >Add Product</v-btn
        >

        <v-dialog v-model="dialog" width="600">
          <v-card max-width="auto">
            <v-btn
              icon="mdi-close"
              size="small"
              class="bg-red-darken-1 d-flex position-absolute"
              style="top: 20px; right: 35px"
              @click="dialog = false"
            >
            </v-btn>

            <template #title>
              <div class="w-100 ml-5 mt-10 text-h6 text-purple-darken-1">
                Add new Product Here
              </div>
            </template>
            <AddProductForm
              @closeDialog="dialog = false"
              :addNewProduct="addProduct"
            />
          </v-card>
        </v-dialog>
      </div>
      <!-- End of Add Product Container -->
    </v-sheet>
    <v-table height="750px" width="700px" class="d-flex" fixed-header>
      <thead>
        <tr class="text-uppercase">
          <th
            class="text-left"
            scope="col"
            v-for="(p, index) in header"
            :key="index"
          >
            {{ p }}

           
          </th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in combinedFiltered" :key="product.id">
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
            <div class="options d-flex align-center justify-center">
             

              <!-- Start of Update Functionality -->
              <div class="text-center pa-4" height="25" width="25">
                <v-btn
                  @click="handleSelectedProduct(product)"
                  size="x-small"
                  height="25"
                  width="25"
                  icon="mdi-pencil"
                  class="bg-purple-darken-1"
                >
                </v-btn>

                <v-dialog v-model="updateFormDialog" width="auto">
                  <v-card width="500">
                    <UpdateForm
                      :productData="selectedProduct"
                      :onUpdate="updateProduct"
                      @closeDialog="updateFormDialog = false"
                    />
                  </v-card>
                </v-dialog>
              </div>
              <!-- End of Update Functionality -->

              <!-- Start of Update Functionality -->
              <v-btn
                height="25"
                width="25"
                icon="mdi-trash-can-outline"
                size="x-small"
                class="bg-purple-lighten-5"
              >
              </v-btn>

              <!-- End of Update Functionality -->
            </div>
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
import UpdateForm from "@/components/UpdateForm.vue";
import AddProductForm from "@/components/AddProductForm.vue";
import ProductDetails from "@/components/ProductDetails.vue";
// const { products, e, loading } = storeToRefs(useProductsStore());
const { header, combinedFiltered, filteredProducts, searchFilter, idFilter } = storeToRefs(
  useProductsStore()
);
const {
  fetchProducts,
  fetchProduct,
  updateProduct,
  addProduct,
  deleteProduct,
} = useProductsStore();

fetchProducts()


const productID = ref()
const dialog = ref(false);
const updateFormDialog = ref(false);

const selectedProduct = ref();
const readDialog = ref(false);

const handleSelectedProduct = (product) => {
  selectedProduct.value = { ...product };
  // console.log(product)
  updateFormDialog.value = true;
 
};


onMounted(() => {
  // console.log(filteredProducts);
});
</script>
