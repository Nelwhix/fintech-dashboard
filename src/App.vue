<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { Bars4Icon } from '@heroicons/vue/24/outline'
  import Calendar from './components/Calendar.vue';
</script>

<template>
  <main class="grid grid-cols-7">
    <Sidebar />
    <!-- <button class="sm:hidden">
      <Bars4Icon class="w-6 h-6"/>
    </button> -->

    <section class="col-span-6">
      <Calendar />
    </section>
  </main>
 
</template>

