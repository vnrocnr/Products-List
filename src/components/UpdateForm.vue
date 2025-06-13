<template>
  <v-card height="400" class="d-flex flex-column pa-4">
    <h3>Update Item Details</h3>
    <p>Item: {{ productData.title }}</p>
    <v-form ref="form" @submit.prevent="submit" novalidate class="d-flex flex-column pa-10">
      <v-text-field
        v-model="title.value.value"
         :error-messages="title.errorMessage.value"
        label="Item Name"
        :text="productData.title"
      ></v-text-field>
      <v-text-field
        v-model="price.value.value"
         :error-messages="price.errorMessage.value"
        :label="`Price (${productData.price})`"
      ></v-text-field>
      <v-text-field
        v-model="description.value.value"
         :error-messages="description.errorMessage.value"
        label="Description"
      ></v-text-field>
      <v-select
        v-model="category.value.value"
         :error-messages="category.errorMessage.value"
        :items="categories"

        label="Category"
        required
      ></v-select>
         <v-divider class="mx-3" vertical></v-divider>
      <v-sheet
       
        >
     
           
      </v-sheet>

    
      <!-- <v-text-field
        v-model="productNewRating.value.value"
        :error-messages="productNewRating.errorMessage.value"
        label="Rating"
      >
    </v-text-field> -->

      <v-btn class="mt-2" type="submit" block >Submit</v-btn>
       <v-btn @click="handleReset">
      clear
    </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
 import { useField, useForm } from 'vee-validate'




const props = defineProps({
  productData: Object,
  require: true,
});



const emit = defineEmits(['updateProductData'])

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelry",
  "electronics",
];






  const { handleSubmit, handleReset } = useForm({

      
    validationSchema: {
      title (value) {
        if (!value || value.length < 2) return 'Name needs to be at least 2 characters.'
        return true

        
      },
      price (value) {
        if (value <= 0)        return 'Price must not be less than or equal to 0' 
return true

      },
    
        description (value) {
         if (!value || value.length < 10) return 'Description too short'
      return true
      },
      category (value) {
        if (!value) return 'Category required'
      return true
      }
    },
  })

  const form = ref()
    const id = props.productData.id
const category = useField('category', undefined, {
    initialValue: props.productData.category
})
const title = useField('title', undefined, {
    initialValue: props.productData.title
})
const price = useField('price', undefined, {
    initialValue: props.productData.price
})
const description = useField('description', undefined, {
    initialValue: props.productData.description
})



    const submit = handleSubmit(values => {
        console.log(values)
        // emit('updateProductData', values)
  })
</script>
