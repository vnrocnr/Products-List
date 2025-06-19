<template v-slot:actions >


    
     <form @submit.prevent="submit" height="800"  class="d-flex position-relative flex-column pa-10" >

      <v-btn icon="mdi-close" 
      size="small" 
      class="bg-red-darken-1 d-flex position-absolute "
      style="top: 10px; right: 20px;"
      @click="$emit('closeDialog')"
      >

      </v-btn>
      <h3>Update Item Details</h3>
      

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
        <v-text-field
      v-model="image.value.value"
      :error-messages="image.errorMessage.value"
      label="Image URL"
      placeholder="https://example.com"
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

    <div class="buttons d-flex flex-column ga-2">
         <v-btn class="mt-2 bg-purple-darken-2" type="submit" block >Submit</v-btn>
       <v-btn @click="handleReset" variant="tonal">
      clear
    </v-btn>
    </div>
     
  </form>


    
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
 import { useField, useForm } from 'vee-validate'




const props = defineProps({
  productData: Object,
  onUpdate: Function,
  dialogVisible: Boolean,
  require: true,
});


const emit = defineEmits([
  'updateProductData',
  'closeDialog'
])

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

          image(value) {
     try{
        new URL(value)
        return true
     } catch{
        return 'Must be a valid url'
     }
    },
      category (value) {
        if (!value) return 'Category required'
      return true
      }
    },
  })

   
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
          const image = useField('image', undefined, {
            initialValue: props.productData.image
        })



    const submit = handleSubmit(values => {
        console.log(values)
       try{
              props.onUpdate(props.productData.id, {
               title: values.title,
            price: values.price,
            description: values.description,
            category: values.category,
            rate: props.productData.rating?.rate,
            image: props.productData.image,
           
             
        })
     
                emit('closeDialog')
      
        } catch (e){
            return e
        }

   
       
      
  })
</script>
