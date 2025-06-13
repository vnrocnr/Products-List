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
                        this.products = await(fetch(`https://fakestoreapi.com/products/${id}`)
                                    .then(response => response.json())
                )
                } catch(e){
                   this.error = e
                } finally{
                    this.isLoading = false
                }
            },

            async updateProduct(id) {
                try{
                    this.products = await(fetch(`https://fakestoreapi.com/products/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.products)
                        })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        )

                        
                } catch(e) {
                    this.e = e
                }
                finally{
                    this.isLoading = false
                }
            }

            
    }
})