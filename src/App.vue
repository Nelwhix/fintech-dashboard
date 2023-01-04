<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { Bars4Icon, ChevronDownIcon } from '@heroicons/vue/24/outline'
  import Calendar from './components/Calendar.vue';
  import FlowChart from './assets/FlowChart.vue'

  const cardContents = [
    {
      title: "Total Income",
      amount: "+ ₦ 600,000.00",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>`
    },
    {
      title: "Total Expenses",
      amount: "- ₦ 100,000.00",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
</svg>
`
    },
    {
      title: "Total Saved",
      amount: "- ₦ 200,000.00",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
</svg>
`
    },
    {
      title: "Projections",
      amount: "- $ 5,000.00",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>
`
    }
  ]
</script>

<template>
  <main class="grid grid-cols-7">
    <Sidebar />
    <!-- <button class="sm:hidden">
      <Bars4Icon class="w-6 h-6"/>
    </button> -->

    <section class="col-span-4 bg-[#fcfbfc]">
      <Calendar />

      <div class="flex font-primary justify-around mt-5">
        <div v-for="card in cardContents" class="border border-gray-200 rounded-md text-sm p-3">
          <h3 class="flex">{{ card.title }} <span v-html="card?.icon" class="text-gray-300 mt-[2px] ml-1"></span></h3>
          <p class="font-medium">{{ card.amount }}</p>
        </div>
      </div>

      <FlowChart class="w-[35rem] mx-auto" />

      <div class="font-primary grid grid-cols-2 mx-8">
        <div class="px-8 border-r border-gray-300">
          <div class="flex justify-between">
            <h3 class="font-semibold">Analytics</h3>
            <div class="flex text-xs border-2 border-gray-300 rounded-md p-1">
              Investments
              <ChevronDownIcon class="w-4 h-4 mt-[2px] ml-3" />
            </div>
          </div>
        </div>
        <div class="px-8">
          <div class="flex justify-between">
            <h3 class="font-semibold">Statistics</h3>
            <div class="flex text-xs border-2 border-gray-300 rounded-md p-1">
              Spendings
              <ChevronDownIcon class="w-3 h-3 mt-[2px] ml-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="col-span-2">

    </section>
  </main>
 
</template>

