<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { Bars4Icon } from '@heroicons/vue/24/outline'
</script>

<template>
  <Sidebar />
  <main>
    <button class="sm:hidden">
    <Bars4Icon class="w-6 h-6"/>
  </button>
  </main>
 
</template>

