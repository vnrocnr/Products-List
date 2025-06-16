import Products from '@/views/Products.vue';
import  {defineStore} from 'pinia'
import axios from "axios";
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('product', () => {
 
   
     
        const    products = ref([]);
         const   error =ref(null) ;
         const   isLoading = ref(true);
          const  searchFilter = ref('');
         const   idFilter = ref('');
          const  limitDescription = ref('')
            
    

          //Below line of code is a helper to save the updated data to local storage
          const saveToLocalStorage = () => {
                 localStorage.setItem('productLists', JSON.stringify(products.value))
          }

    

           const header = computed (() => {
                return products.value.length > 0 ? Object.keys(products.value[0]) : []
           });

         const  idFiltered = computed( () => {
                if(!idFilter.value) return products.value

                return products.value.filter(product => product.id.toString().includes(idFilter.value))
           });


          const combinedFiltered = computed(() => {


                return products.value.filter((product) => {
                    const searchFiltered = searchFilter.value ?  product.title.toLowerCase().includes(searchFilter.value.toLowerCase()) : true;
                    const idFiltered = idFilter.value ? product.id.toString().includes(idFilter.value) : true;

                    
                         return searchFiltered && idFiltered
                }) 

             

           });

      


         const fetchProducts = async () => {
                  
                   
                try{    

                    const local = JSON.parse(localStorage.getItem('productLists'))
                    if(Array.isArray(local) && local.length > 0){
                            products.value = local
                    } else{
                          const res =  await axios.get('https://fakestoreapi.com/products')
                      products.value = res.data
                      saveToLocalStorage()
                    }


                   

                } catch(e){
                        error.value = e
                } finally{
                    isLoading.value = false
                }
            };

              const addProduct = async(product) => {
                    try{
                        
                        const res = await axios.post('https://fakestoreapi.com/products', product)
                        
                        products.value.push(res.data)
                        // console.log(res)
                        saveToLocalStorage()

                    }catch(e){
                        error.value = e
                    }finally{
                            isLoading.value =false
                    }
            };

             const updateProduct = async (id, product) => {
                            try {
                            const payload = {
                                id,
                                title: product.title,
                                price: product.price,
                                description: product.description,
                                category: product.category,
                                image: product.image
                            }

                            await axios.put(`https://fakestoreapi.com/products/${id}`, payload)

                            const index = products.value.findIndex((p) => p.id === id)
                            if (index !== -1) {
                                const existingRating = products.value[index].rating ?? { rate: 0, count: 0 }

                                products.value[index] = {
                                ...payload,
                                rating: existingRating
                                }

                                saveToLocalStorage()
                            }
                            } catch (e) {
                            error.value = e
                            } finally {
                            isLoading.value = false
                            }
                        }


                 const   deleteProduct = async(id) =>  {
                    try{
                        await axios.delete( `https://fakestoreapi.com/products/${id} `)
                        
                    
                    
               
                        products.value =   products.value.filter(p => p.id !== id)
                  
                   
                       saveToLocalStorage()
                   
                   
                    } catch(e){
                            if(e.response){
                        console.log(e.response.data)
                    }else{
                        console.log(e.message)
                    }
                    } finally{
                        isLoading.value = false
                    }
            }

            return{
                header,
            products,
                  error,
                isLoading,
                    searchFilter,
                idFilter,
                limitDescription,
                idFiltered,
                combinedFiltered,
                // updatedDescription,
                fetchProducts,
                addProduct,
                updateProduct,
                deleteProduct
            }
    } ,
 {
    persist: true
})