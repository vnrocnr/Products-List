<template v-slot:actions>
  <form @submit.prevent="submit" class="d-flex flex-column pa-10">
    <v-text-field
      v-model="title.value.value"
      :counter="5"
      :error-messages="title.errorMessage.value"
      label="Product Title"
    ></v-text-field>

    <v-text-field
      v-model="price.value.value"
    
      :error-messages="price.errorMessage.value"
      label="Price"
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
      :items="items"
      label="Category"
    ></v-select>

    <div class="buttonsContainer d-flex flex-column ga-3">
         <v-btn class=" bg-purple-darken-1" type="submit" > submit </v-btn>
   
        <v-btn @click="handleReset" variant="outlined" > clear </v-btn>
    </div>
   
  </form>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import { useField, useForm } from "vee-validate";



const emit = defineEmits(["closeDialog"]);
const props = defineProps({
    addNewProduct: Function
})


const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    title(value) {
      if (value?.length >= 5) return true;

      return "Name needs to be at least 5 characters.";
    },
    price(value) {

        const number = parseFloat(value);
      if (!value || isNaN(number)){
         return "Price needs to be a number";
      } 

      if(number <=0){
        return "Price must be greater than 0"
      }
        
      return true
    },
    description(value) {

      
      if (!value || value.trim().length < 10){
            return "Description must be more than 10";
      } 

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
    category(value) {
      if (value) return true;

      return "Select an item.";
    }
  },
});
const title = useField("title");
const description = useField("description");
const price = useField("price");
const category = useField("category");
const image = useField("image")
const items = ref(["men's clothing", "women's clothing", "jewelry", "electronics"]);

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2))

  try{
         props.addNewProduct({
            title: values.title,
            description: values.description,
            price: values.price,
            category: values.category,
            image: values.image,
            

        })

    
        
        emit("closeDialog");
  } catch(e){
     console.log(e)
  }
 
});
</script>
