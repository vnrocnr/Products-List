<template class="bg-grey-darken-2">
  <h1>Overview</h1>

  <v-container class="">
    <v-row no-gutters>
      <v-col v-for="n in values" :key="n.title" cols="12" sm="4">
        <v-sheet
          :title="n.title"
          :class="`ma-2 pa-4 ${n.bg} ga-2 rounded-lg d-flex flex-column justify-center`"
          height="150"
        >
          <div class="descriptions d-flex flex-column">
            <p style="font-size: medium;" class=" font-weight-bold mb-0">{{ n.title }}</p>
            <p style="font-size: small">{{ n.subtitle }}</p>
          </div>

          <div class="d-flex flex-row justify-space-between align-center w-100">
            <p class="text-h4 font-weight-bold">{{ n.data }}</p>
            <v-btn
              rounded="lg"
              class="bg-dark pa-0"
              icon
              style="width: 35px; height: 35px"
              variant="flat"
            >
              <v-icon size="32" class="w-100 h-100"
                >mdi-arrow-top-right-bold-box</v-icon
              >
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-card height="600" variant="flat">
    <h1 class="ml-3">Sales Analytics</h1>
    <BarChart />
  </v-card>
</template>

<script setup>
import BarChart from "@/components/Chart.vue";
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();
const values = [
  {
    title: "Total Products",
    subtitle: "Number of Available Products",
    bg: "bg-purple-darken-3",
    data: store.totalProducts,
    icon: "mdi-cart-outline",
  },
  {
    title: "Total Added",
    subtitle: "Number of New Added Products",
    bg: "bg-orange-darken-1",
    data: store.totalAddedProduct,
  },
  {
    title: "Total Sales",
    subtitle: "Number of Products sold this month",
    bg: "bg-amber-darken-4",
    data: 1.2 + "M",
  },
];

</script>
