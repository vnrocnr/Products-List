<template>
  <v-container>
    <v-row no-gutters class="">
      <v-col >

      <v-sheet class="pa-4" height="520" width="1010px" elevation="2">
            <canvas id="myChart"></canvas>
          </v-sheet>

        <!-- <v-sheet class="pa-4" style="height: 550px; width: 700px">
          <canvas id="pie"></canvas>
        </v-sheet> -->
      </v-col>
      <v-col  class="pa-5">
         
        <v-card height="500" width="500"  class="pa-4 " >
           <h3>Most Popular Items</h3>

            <v-container height="450" class="overflow-y-scroll rounded-2xl d-flex flex-column  ga-4">
                  <v-sheet
                  height="70"
                  class="d-flex flex-column pa-2 rounded-lg "
                  v-for="topItem in store.topItems"
                elevation="2"
                  >
                    
                    <p style="max-width: 500px" class="text-truncate"> {{ topItem.title }} </p>
                    <p>  
                      <v-icon height="3" width="3">mdi-star</v-icon>
                      {{ topItem.rate }}
                    </p>
                    


                  </v-sheet>
            </v-container>

                
     
           
              

        </v-card>
   
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();

const category = store.categories;

onMounted(() => {
  store.products.forEach((products) => {
    console.log(products.category);
  });



   console.log(store.topItems)

  const ctx = document.getElementById("myChart");
  const pieContainer = document.getElementById("pie");

  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: store.categories,
        datasets: [
          {
            label: "# Sales for each category",
            data: [300000, 120000, 978920, 418239],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // if (pieContainer) {
  //   const pieData = {
  //     labels: category,

  //     datasets: [{
  //       label: 'My First Dataset',
  //       data: [300, 50, 100, 200],

  //       backgroundColor: [
  //         'rgb(255, 133, 0)',
  //         'rgb(90, 24, 154)',
  //         'rgb(157, 78, 221)',
  //         'rgb(255, 158, 0)'
  //       ],
  //       hoverOffset: 4
  //     }]
  //   }

  //   new Chart(pieContainer, {
  //     type: 'pie',
  //     data: pieData,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false
  //     }
  //   })
  // }
});
</script>
