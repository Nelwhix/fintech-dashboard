<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { ChevronDownIcon, MoonIcon, BellIcon } from '@heroicons/vue/24/outline'
  import Calendar from './components/Calendar.vue';
  import Card from './components/Card.vue'
  import FlowChart from './assets/FlowChart.vue'
  import Avatar from './assets/Avatar.vue'
  import SendIcon from './assets/SendIcon.vue';
  import WalletIcon from './assets/WalletIcon.vue';
  import PhoneIcon from './assets/PhoneIcon.vue'
  import Analytics from './assets/Analytics.vue'

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
    <Sidebar class="w-[14vw] h-screen" />
    <div></div>
    <section class="col-span-4 bg-[#fcfbfc]">
      <Calendar />

      <div class="flex font-primary justify-around mt-5">
        <div v-for="card in cardContents" class="border border-gray-200 rounded-md text-sm p-3">
          <h3 class="flex">{{ card.title }} <span v-html="card.icon" class="text-gray-300 mt-[2px] ml-1"></span></h3>
          <p class="font-medium">{{ card.amount }}</p>
        </div>
      </div>

      <FlowChart class="w-[35rem] mx-auto" />

      <Analytics class="w-[40rem] mx-auto" />
    </section>
    
    <!-- Card Section -->
    <section class="col-span-2 bg-[#fcfbfc] pt-5 font-primary">
      <div class="ml-20 flex justify-around w-56">
        <button>
          <MoonIcon class="w-5 h-5" />
        </button>
        <BellIcon class="w-5 h-5 mt-[2px]" />
        <Avatar class="w-6 h-6" />
        <span class="flex font-medium">Nelson I <ChevronDownIcon class="w-4 h-4 mt-1 ml-2" /></span>
      </div>
      <div class="border border-gray-200 rounded-2xl mt-5 mx-6">
        <h2 class="text-center text-gray-600 font-semibold text-lg">Cards</h2>
        <Card />
        <div class="mt-5">
          <h3 class="text-center font-semibold text-gray-600">Quick Actions</h3>
          <div class="flex justify-between mx-9 my-3">
            <span class="border border-gray-300 rounded-md p-2 text-xs">
              <SendIcon class="w-8 h-8" />
              Send
            </span>
            <span class="border border-gray-300 rounded-md p-2 text-xs">
              <WalletIcon class="w-8 h-8" />
              Pay Bills
            </span>
            <span class="border border-gray-300 rounded-md p-2 text-xs">
              <PhoneIcon class="w-8 h-8" />
              Airtime
            </span>
          </div>
        </div>
      </div>
      <div class="border border-gray-200 rounded-2xl mt-8 mx-6 mb-5">
        <div class="flex justify-between mt-5 mx-5">
          <h2 class="font-semibold text-gray-600">Recent Activity</h2>
          <span class="text-sm underline mt-[2px]">View all</span>
        </div>
        <div class="grid grid-cols-2 mt-7 mx-5 content-around h-80">
          <div>
            <p class="font-semibold text-gray-600">Dr. Akinlowo</p>
            <p class="text-xs text-gray-600">Transfer Debit</p>
          </div>
          <div class="">
            <p class="font-semibold text-red-700">- $3500.00</p>
            <p class="text-xs text-gray-600">3 mins ago</p>
          </div>
          <div>
            <p class="font-semibold text-gray-600">Dstv Subscription</p>
            <p class="text-xs text-gray-600">Bill payment</p>
          </div>
          <div class="">
            <p class="font-semibold text-red-700">- $500.00</p>
            <p class="text-xs text-gray-600">3 mins ago</p>
          </div>
          <div>
            <p class="font-semibold text-gray-600">Password changed</p>
            <p class="text-xs text-gray-600">Security</p>
          </div>
          <div>
            <p class="text-xs text-gray-600">5 days ago</p>
          </div>
          <div>
            <p class="font-semibold text-gray-600">Aremu Olajide</p>
            <p class="text-xs text-gray-600">Transfer Credit</p>
          </div>
          <div class="">
            <p class="font-semibold text-green-700">+ $3206.00</p>
            <p class="text-xs text-gray-600">7 days ago</p>
          </div>
          <div>
            <p class="font-semibold text-gray-600">Facebook</p>
            <p class="text-xs text-gray-600">Advertising</p>
          </div>
          <div>
            <p class="font-semibold text-red-700">- $800.00</p>
            <p class="text-xs text-gray-600">12-09-22</p>
          </div>
        </div>
        <p class="font-semibold text-xs my-5 mx-3">Notice any suspicious activity? <span class="underline">Report Now</span></p>
      </div>
    </section>
  </main>
 
</template>

