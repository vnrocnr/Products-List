
  
  <template class="bg-grey-darken-2">
  
  
  <h1>Overview</h1>

  <v-container class="">
    <v-row no-gutters>
      <v-col
        v-for="n in values"
        :key="n.title"
        cols="12"
        sm="4"
     
      >
   
        <v-sheet :title="n.title" :class="`ma-2 pa-2 ${n.bg} rounded-lg`" height="100">
            <h2 class="text-white">  {{ n.title }} </h2>
            <p class="text-lg">{{ n.data }}</p>
        </v-sheet>

      
      </v-col>


      
    </v-row>
  </v-container>

  <v-card height="620" >
<h1 class="ml-3">Sales Analytics</h1>
      <BarChart/>
  </v-card>
</template>


<script setup>
import BarChart from '@/components/Chart.vue';
import { useProductsStore } from '@/stores/products';

const store = useProductsStore()
const values = [{
    title: 'Total Products', bg:'bg-purple-darken-3', data: store.totalProducts 
}, {
  title: 'Total Added', bg:'bg-orange-darken-1', data: store.totalAddedProduct
}, {
  title: 'Total Sales', bg:'bg-amber-darken-4', data:1.2 + 'M'
}
 ]
// {
//   title: 'Total Removed', bg:'bg-pink-lighten-4', data:store.totalRemovedProduct
// }
</script>