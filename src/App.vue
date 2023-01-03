<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { Bars4Icon } from '@heroicons/vue/24/outline'
  import Calendar from './components/Calendar.vue';
  import FlowChart from './assets/FlowChart.vue'

  const cardContents = [
    {
      title: "Total Income",
      amount: "+ $25,0000.00"
    },
    {
      title: "Total Expenses",
      amount: "- $ 15,000.00"
    },
    {
      title: "Total Saved",
      amount: "- $ 3,000.00"
    },
    {
      title: "Projections",
      amount: "- $ 5,000.00"
    }
  ]
</script>

<template>
  <main class="grid grid-cols-7">
    <Sidebar />
    <!-- <button class="sm:hidden">
      <Bars4Icon class="w-6 h-6"/>
    </button> -->

    <section class="col-span-4">
      <Calendar />

      <div class="flex font-primary justify-around mt-5">
        <div v-for="card in cardContents" class="border border-gray-200 rounded-md text-sm p-3">
          <h3>{{ card.title }}</h3>
          <p class="font-medium">{{ card.amount }}</p>
        </div>
      </div>

      <FlowChart class="w-[35rem] mx-auto" />
    </section>
    <section class="col-span-2">

    </section>
  </main>
 
</template>

