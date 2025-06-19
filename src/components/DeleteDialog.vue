<template v-slot:actions>
        <v-sheet height="200" class="d-flex  position-relative flex-column justify-center align-center">

      <!-- <v-img
  width="300"
  max-height="310"


  
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-outline</title><path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" /></svg>
</v-img> -->
          <h3>Are you sure to delete this product?</h3>
              <p> <span class="text-red-darken-2 text-uppercase font-weight-bold" >Warning!</span> The product will be deleted permanently.</p>
       
       

        
       <v-divider></v-divider>

            <div class="btns d-flex ga-3 position-absolute" style="bottom: 20px; right: 20px;">
                  <v-btn @click="$emit('closeDialog')">Cancel</v-btn>
                <v-btn color="error" @click="handleDelete">Delete</v-btn>
      
            </div>

            
    
       </v-sheet>
</template>

<script setup>
import { defineEmits, defineProps, shallowRef } from 'vue';

const emit = defineEmits(['closeDialog'])

const props = defineProps({
    deleteItem: Function,
    selectedProduct: Number
})



const handleDelete = () =>  {

    try{
    props.deleteItem(props.selectedProduct)
        // console.log(productTobedeleted)
  emit('closeDialog')
    } catch(e){
        return e
    }
   
}



</script>