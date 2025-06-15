import Products from '@/views/Products.vue';
import  {defineStore} from 'pinia'
import axios from "axios";

export const useProductsStore = defineStore('product', {
      id: 'product',
    state: () => {
      
        return{
            products: [],
            error: null,
            isLoading: true,
            searchFilter: '',
            idFilter: '',
            limitDescription: ''
            
        }
    },
    getters: {
            categorySort(state){
                return (productCategory) => state.products.filter((product) => product.category === productCategory )
            },

           idSort: (state) => {
                return [...state.products].sort((a,b) => a.id-b.id)
           },

           header: (state) => {
                return state.products.length > 0 ? Object.keys(state.products[0]) : []
           },

           filteredProducts: (state) => {

                if(!state.searchFilter) return state.products

                return state.products.filter(product => product.title.toLowerCase().includes(state.searchFilter.toLowerCase()))
           },

           idFiltered: (state) => {
                if(!state.idFilter) return state.products

                return state.products.filter(product => product.id.toString().includes(state.idFilter))
           },

           combinedFiltered: (state) => {
                return state.products.filter((product) => {
                    const searchFiltered = state.searchFilter ?  product.title.toLowerCase().includes(state.searchFilter.toLowerCase()) : true;
                    const idFiltered = state.idFilter ? product.id.toString().includes(state.idFilter) : true;

                    
                         return searchFiltered && idFiltered
                }) 

             

           },

           updatedDescription: (state) => {
                return this.product
           }
    },

    actions: {
            async fetchProducts() {
                    this.products =[]
                   
                try{    
                    const res =  await axios.get('https://fakestoreapi.com/products')
                        this.products = res.data
                        // localStorage.setItem('productLists ', JSON.stringify(res.data))

                } catch(e){
                        this.error = e
                } finally{
                    this.isLoading = false
                }
            },

            async addProduct(product) {
                    try{
                        
                        const res = await axios.post('https://fakestoreapi.com/products', product)
                        
                        this.products.push(res.data)
                        // console.log(res)
                    }catch(e){
                        this.error = e
                    }finally{
                            this.isLoading =false
                    }
            },

            async updateProduct(id, product) {
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
                    
                    const index = this.products.findIndex(p => p.id === id)
                    if(index !== -1){
                           updated.rating = this.products[index].rating ?? { rate: 0, count: 0 }

                        this.products[index] = updated
    
                    }
                    

                        
                } catch(e) {
                    // this.e = e

                    if(e.response){
                        console.log(e.response.data)
                    }else{
                        console.log(e.message)
                    }
                }
                finally{
                    this.isLoading = false
                }
                
            },

            async deleteProduct(id) {
                    try{
                        const res = await axios.delete( `https://fakestoreapi.com/products/${id} `)
                        
                        const deletedProduct = res.data
                        const index = this.products.find(p => p.id === id)
                        
                        this.products[index] = deletedProduct
                    } catch(e){
                            if(e.response){
                        console.log(e.response.data)
                    }else{
                        console.log(e.message)
                    }
                    } finally{
                        this.isLoading = false
                    }
            }

            
    }, persist: true
})