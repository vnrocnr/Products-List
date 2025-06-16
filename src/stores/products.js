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
                    const res =  await axios.get('https://fakestoreapi.com/products')
                     import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('product', () => {
  const products = ref([])
  const error = ref(null)
  const isLoading = ref(true)
  const searchFilter = ref('')
  const idFilter = ref('')
  const limitDescription = ref('')

  const header = computed(() => {
    return products.value.length > 0 ? Object.keys(products.value[0]) : []
  })

  const idFiltered = computed(() => {
    if (!idFilter.value) return products.value
    return products.value.filter((product) =>
      product.id.toString().includes(idFilter.value)
    )
  })

  const combinedFiltered = computed(() => {
    return products.value.filter((product) => {
      const searchFiltered = searchFilter.value
        ? product.title.toLowerCase().includes(searchFilter.value.toLowerCase())
        : true
      const idMatch = idFilter.value
        ? product.id.toString().includes(idFilter.value)
        : true
      return searchFiltered && idMatch
    })
  })

  const fetchProducts = async () => {
    isLoading.value = true
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      products.value = res.data
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  const addProduct = async (product) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/products', product)
      products.value.push(res.data)
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  const updateProduct = async (id, product) => {
    try {
      const payload = {
        id: id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      }
      const res = await axios.put(`https://fakestoreapi.com/products/${id}`, payload)
      const updated = res.data

      const index = products.value.findIndex((p) => p.id === id)
      if (index !== -1) {
        updated.rating = products.value[index].rating ?? { rate: 0, count: 0 }
        products.value[index] = updated
      }
    } catch (e) {
      console.error(e.response?.data || e.message)
    } finally {
      isLoading.value = false
    }
  }

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
      const deletedProduct = res.data
      products.value = products.value.filter((p) => p.id !== deletedProduct.id)
    } catch (e) {
      console.error(e.response?.data || e.message)
    } finally {
      isLoading.value = false
    }
  }

  return {
    header,
    products,
    error,
    isLoading,
    searchFilter,
    idFilter,
    limitDescription,
    idFiltered,
    combinedFiltered,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
}, {
  persist: true
})
 products.value = res.data
                        // localStorage.setItem('productLists ', JSON.stringify(res.data))

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
                    }catch(e){
                        error.value = e
                    }finally{
                            isLoading.value =false
                    }
            };

            const  updateProduct = async(id, product) => {
                try{
                             const payload = {
                                     id: id,
                                    title: product.title,
                                    price: product.price,
                                    description: product.description,
                                    category: product.category,
                                    image: product.image,
                                    };
                    const res = await axios.put(`https://fakestoreapi.com/products/${id}`, payload)
                    const updated = res.data
                    
                    const index = products.value.findIndex(p => p.id === id)
                    if(index !== -1){
                           updated.rating = products.value[index].rating ?? { rate: 0, count: 0 }

                        products.value[index] = updated
    
                    }
                    

                        
                } catch(e) {
                    // e = e

                    if(e.response){
                        console.log(e.response.data)
                    }else{
                        console.log(e.message)
                    }
                }
                finally{
                    isLoading.value = false
                }
                
            }

                 const   deleteProduct = async(id) =>  {
                    try{
                        const res = await axios.delete( `https://fakestoreapi.com/products/${id} `)
                        
                        const deletedProduct = res.data
                    
               
                        products.value =   products.value.filter(p => p.id !== deletedProduct.id)
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