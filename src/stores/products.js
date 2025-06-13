import Products from '@/components/Products.vue'
import  {defineStore} from 'pinia'
import axios from "axios";

export const useProductsStore = defineStore('product', {
      id: 'product',
    state: () => {
      
        return{
            products: [],
            error: null,
            isLoading: true,
            searchFilter: ''
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

           limitDesc: (state) => {
                return state.products.filter(x => x.category)
           }
    },

    actions: {
            async fetchProducts() {
                    this.products =[]

                try{    
                    const res =  await axios.get('https://fakestoreapi.com/products')
                        this.products = res.data
                } catch(e){
                        this.error = e
                } finally{
                    this.isLoading = false
                }
            },

            async fetchProduct(id) {
                try{
                    const res =await axios.get(`https://fakestoreapi.com/products/${id}`)
                        this.products = res.data
                
                } catch(e){
                   this.error = e
                } finally{
                    this.isLoading = false
                }
            },

            async updateProduct(id, product) {
                try{

                    const res = await axios.put(`https://fakestoreapi.com/products/${id}`, product)
                    const updated = res.data
                    
                    const index = this.products.findIndex(p => p.id === id)
                    if(index !== -1){
                           updatedData.rating = this.products[index].rating ?? { rate: 0, count: 0 }

                        this.products[index] = updated
    
                    }
                        console.log(updated)

                        
                } catch(e) {
                    // this.e = e

                    if(e.res){
                        console.log(e.res.data)
                    }
                }
                finally{
                    this.isLoading = false
                }
                
            }

            
    }, persist: true
})